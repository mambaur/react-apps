import React, {Component} from 'react';
import './card.css';

class Card extends Component{

    handleCekNama = ()=>{
        this.props.onCekNama
    }

    render(){
        return (
            <div className="card">
            <h3>{this.props.name}</h3>
            <p>{this.props.nim}</p>
            <p>{this.props.ttl}</p>
            <button className="btn btn-primary">Cek nama</button>
            </div>
        )
    }
}

Card.defaultProps = {
    name: 'No name',
    nim: 'Nim is not available',
    ttl: 'Null value'
}

export default Card;