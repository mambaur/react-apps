import React, {Component, Fragment} from 'react';
import CardWidget from '../../component/card/card';
import NavbarClass from '../../component/navbar/navbar';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component{
    state = {
        name: 'klik cek nama',
        post: []
    }

    handleCekNama = (newValue)=>{
        this.setState({
            name: newValue
        })
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    post: json
                })
            })
    }

    render(){
        return (
            <Fragment>
                <NavbarClass/>
                <Container className="my-4">
                    <h1>React Training</h1>
                    <Row>
                        <p className="ml-3">Nama: {this.state.name}</p>
                    </Row>
                    <Row>
                    {
                        this.state.post.map(post => {
                            return <CardWidget key={post.id} name={post.name} email={post.email} onCekNama={(value)=>this.handleCekNama(value)}/>
                        })
                    }
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Home;