import React, {Component, Fragment} from 'react';
import { Card, Button } from 'react-bootstrap';

class CardWidget extends Component{

    handleCekNama = (newValue)=>{
        this.props.onCekNama(newValue)
    }

    onChangeName = ()=>{
        this.handleCekNama(this.props.name)
    }

    render(){
        return (
            <Fragment>
                <Card className="m-1" style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {this.props.email} - {this.props.ttl}
                        </Card.Text>
                        <Button variant="primary" onClick={this.onChangeName}>Cek nama</Button>
                    </Card.Body>
                </Card>
            </Fragment>
        )
    }
}

CardWidget.defaultProps = {
    name: 'No name',
    email: 'Email is not available',
    ttl: 'Null value'
}

export default CardWidget;