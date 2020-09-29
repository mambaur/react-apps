import React, {Component} from 'react';
import Card from '../../component/card/card';
// import 'bootstrap/dist/css/bootstrap.css';
import './home.css';

class Home extends Component{
    state = {
        value: 1,
        name: 'klik cek nama'
    }

    handlePlus = ()=>{
        this.setState({
            value: this.state.value + 1
        })
    }
    
    handleMin = ()=>{
        if(this.state.value > 0){
            this.setState({
                value: this.state.value - 1
            })
        }
    }

    handleCekNama = (newValue)=>{
        this.setState({
            name: newValue
        })
    }

    render(){
        return (
            <div className="home-container">
                <h1>Card View</h1>
                <div className="button-check">
                    <button className="btn btn-primary" onClick={this.handlePlus}>+ Tambah</button>
                    <p>{this.state.value}</p>
                    <button className="btn btn-primary" onClick={this.handleMin}>- Kurang</button>
                    <p>Nama: {this.state.name}</p>
                </div>
                <Card name="Mambaur Roziq" nim="E41161383" onCekNama={()=>handleCekNama()}/>
                <Card name="Ahira Labata" nim="E41161345"/>
                <Card name="Rezhi Sylvia" nim="E4116199"/>
                <Card />
            </div>
        )
    }
}

export default Home;