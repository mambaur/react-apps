import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from '../pages/crud/crud';
import Home from '../pages/home/home';

// npx json-server --watch db.json --port 3004

class RouteWidget extends Component{
    render(){
        return (
            <Router>
                <Fragment>
                    <Route path="/" exact component={Home}/>
                    <Route path="/crud" component={Crud}/>
                </Fragment>
            </Router>
        )
    }
}

export default RouteWidget;