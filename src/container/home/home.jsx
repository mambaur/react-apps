import React, {Component, Fragment} from 'react';
import CardWidget from '../../component/card/card';
import NavbarWidget from '../../component/navbar/navbar';
import SidebarWidget from '../../component/sidebar/sidebar';
import JumbotronWidget from '../../component/jumbotron/jumbotron';
import BreadcrumbWidget from '../../component/breadcrumb/breadcrumb';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

// npx json-server --watch db.json --port 3004

class Home extends Component{
    state = {
        post: [],
    }

    getPostAPI = ()=>{
        axios.get('http://localhost:3004/posts')
            .then((response)=>{
                this.setState({
                    post: response.data,
                })
            })
    }

    handleDelete = (id)=>{
        axios.delete(`http://localhost:3004/posts/${id}`)
            .then((response)=>{
                console.log(response)
                this.getPostAPI()
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
                    <h1>Interaksi API</h1>
                    <Row>
                        <Col sm={8}>
                            <BreadcrumbWidget/>
                        {
                            this.state.post.map(post => {
                                return <CardWidget key={post.id} data={post} onDeleteClick={this.handleDelete}/>
                            })
                        }
                        </Col>

                        <Col sm={4}>
                            <SidebarWidget/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Home;