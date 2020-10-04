import React, {Component, Fragment} from 'react';
import { Card, Button } from 'react-bootstrap';

class CardWidget extends Component{
    render(){
        return (
            <Fragment>
                <Card className="my-1" style={{ width: '100%' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>{this.props.data.title}</Card.Title>
                        <Card.Text>
                            {this.props.data.body}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>{this.props.onDeleteClick(this.props.data.id)}}>Delete</Button>
                    </Card.Body>
                </Card>
            </Fragment>
        )
    }
}

CardWidget.defaultProps = {
    title: 'Title is null',
    body: 'Content is null',
}

export default CardWidget;