import React, {Component, Fragment} from 'react';
import CardWidget from '../../../component/card/card';
import NavbarWidget from '../../../component/navbar/navbar';
import SidebarWidget from '../../../component/sidebar/sidebar';
import JumbotronWidget from '../../../component/jumbotron/jumbotron';
import BreadcrumbWidget from '../../../component/breadcrumb/breadcrumb';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

// npx json-server --watch db.json --port 3004

class Crud extends Component{
    state = {
        post: [],
        content: 'getAll',
        postKey: {
            userId: 1,
            id: 1,
            title: '',
            body: '',
        },
        isUpdate: false
    }

    getPostAPI = ()=>{
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then((res)=>{
                this.setState({
                    post: res.data,
                })
            })
    }

    postDataToAPI = ()=>{
        axios.post('http://localhost:3004/posts', this.state.postKey)
            .then((res)=>{
                console.log(res)
                alert('Insert data success!')
                this.setState({
                    content: 'getAll',
                }, ()=>{
                    this.getPostAPI()
                })
            }, (err)=>{
                console.log(err)
            })
    }

    putDataToAPI = ()=>{
        axios.put(`http://localhost:3004/posts/${this.state.postKey.id}`, this.state.postKey)
            .then((res)=>{
                console.log(res)
                alert('Update data success!')
                this.setState({
                    content: 'getAll',
                    postKey: {
                        userId: 1,
                        id: 1,
                        title: '',
                        body: '',
                    },
                }, ()=>{
                    this.getPostAPI()
                })
            })
    }

    handleDelete = (id)=>{
        axios.delete(`http://localhost:3004/posts/${id}`)
            .then((res)=>{
                console.log(res)
                this.getPostAPI()
            })
    }

    handleUpdate = (data)=>{
        this.setState({
            content: 'updateData',
            postKey: data,
            isUpdate: true
        })
    }

    handleMenuClick = (value)=>{
        this.setState({
            content: value,
            postKey: {
                userId: 1,
                id: 1,
                title: '',
                body: '',
            },
            isUpdate: value !== "updateData" ? false : true
        }, ()=>{
            this.getPostAPI()
        })
    }

    handleSubmit = ()=>{
        if(this.state.isUpdate){
            this.putDataToAPI();
        }else{
            this.postDataToAPI();
        }
    }

    handleFormChange = (event)=>{
        let postKeyNew = {...this.state.postKey};
        let timestamp = new Date().getTime();
        if (!this.state.isUpdate) {
            postKeyNew['id'] = timestamp;
        }
        postKeyNew[event.target.name] = event.target.value;
        this.setState({
            postKey: postKeyNew
        })
    }

    componentDidMount () {
        this.getPostAPI()
    }

    render(){
        return (
            <Fragment>
                <NavbarWidget/>
                <JumbotronWidget/>
                <Container className="my-4">
                    {
                        this.state.content === 'getAll' ? (
                            <h1>Get Data Fake API</h1>
                        ): this.state.content === 'addData' ? (
                            <h1>Post Data Fake API</h1>
                        ): this.state.content === 'updateData' ? (
                            <h1>Update Data Fake API</h1>
                        ):(null)
                    }
                    
                    <Row>
                        <Col sm={8}>
                            <BreadcrumbWidget/>
                        {
                            this.state.content === 'getAll' ? (
                                this.state.post.map(post => {
                                    return <CardWidget key={post.id} data={post} onDeleteClick={this.handleDelete} onUpdateClick={this.handleUpdate}/>
                                })
                            ):this.state.content === 'addData' || this.state.content === 'updateData' ?(
                                <Card className="p-3">
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" value={this.state.postKey.title} name="title" placeholder="Input title..." onChange={this.handleFormChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Article content</Form.Label>
                                        <Form.Control as="textarea" value={this.state.postKey.body} name="body" rows="3" onChange={this.handleFormChange}/>
                                    </Form.Group>
                                    {
                                        this.state.content === 'addData' ? (<Button variant="success" onClick={this.handleSubmit} type="submit">
                                        Tambah
                                    </Button>):(<Button variant="primary" onClick={this.handleSubmit} type="submit">
                                        Update
                                    </Button>)
                                    }
                                    
                                </Card>
                            ):(null)
                        }
                        </Col>

                        <Col sm={4}>
                            <SidebarWidget onMenuClick={this.handleMenuClick}/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Crud;