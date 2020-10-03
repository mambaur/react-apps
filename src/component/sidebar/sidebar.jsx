import React, {Component, Fragment} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class SidebarWidget extends Component {
    render(){
        return(
            <Fragment>
                <ListGroup>
                    <ListGroup.Item action variant="light">
                        All data
                    </ListGroup.Item>
                    <ListGroup.Item action variant="light">
                        Tambah data
                    </ListGroup.Item>
                    <ListGroup.Item action variant="light">
                        Ubah data
                    </ListGroup.Item>
                </ListGroup>
            </Fragment>
        )
    }
}

export default SidebarWidget;