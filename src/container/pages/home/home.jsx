import React, {Component, Fragment} from 'react';
import NavbarWidget from '../../../component/navbar/navbar';
import {Jumbotron, Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'

class Home extends Component {
    render(){
        return(
            <Fragment>
                <NavbarWidget/>
                <Jumbotron className="bg-dark home-jumbotron" fluid>
                    <Container className="jumbotron-content">
                        <h1 className="text-light">Hello, world!</h1>
                        <p className="text-light">
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </Container>
                </Jumbotron>
            </Fragment>
        )
    }
}

export default Home;