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
        }
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
                alert('Insert data success!')
            }, (err)=>{
                console.log(err)
            })
    }

    handleDelete = (id)=>{
        axios.delete(`http://localhost:3004/posts/${id}`)
            .then((res)=>{
                this.getPostAPI()
            })
    }

    handleMenuClick = (value)=>{
        this.setState({
            content: value
        }, ()=>{
            this.getPostAPI()
        })
    }

    handleSubmit = ()=>{
        this.postDataToAPI();
    }

    handleFormChange = (event)=>{
        let postKeyNew = {...this.state.postKey};
        let timestamp = new Date().getTime();
        postKeyNew['id'] = timestamp;
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
                        ): this.state.content === 'editData' ? (
                            <h1>Put Data Fake API</h1>
                        ):(null)
                    }
                    
                    <Row>
                        <Col sm={8}>
                            <BreadcrumbWidget/>
                        {
                            this.state.content === 'getAll' ? (
                                this.state.post.map(post => {
                                    return <CardWidget key={post.id} data={post} onDeleteClick={this.handleDelete}/>
                                })
                            ):this.state.content === 'addData' ?(
                                <Card className="p-3">
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" name="title" placeholder="Input title..." onChange={this.handleFormChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Article content</Form.Label>
                                        <Form.Control as="textarea" name="body" rows="3" onChange={this.handleFormChange}/>
                                    </Form.Group>
                                    <Button variant="primary" onClick={this.handleSubmit} type="submit">
                                        Tambah
                                    </Button>
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