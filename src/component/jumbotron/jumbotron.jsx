import React from 'react';
import {Jumbotron, Button, Container} from 'react-bootstrap';

const JumbotronWidget = ()=>{
    return (
        <Jumbotron className="bg-dark" fluid>
            <Container>
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
    )
}

export default JumbotronWidget;