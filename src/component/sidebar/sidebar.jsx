import React, {Component, Fragment} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class SidebarWidget extends Component {
    render(){
        return(
            <Fragment>
                <ListGroup>
                    <ListGroup.Item onClick={()=>this.props.onMenuClick('getAll')} action variant="light">
                        All data
                    </ListGroup.Item>
                    <ListGroup.Item onClick={()=>this.props.onMenuClick('addData')} action variant="light">
                        Tambah data
                    </ListGroup.Item>
                    <ListGroup.Item onClick={()=>this.props.onMenuClick('editData')} action variant="light">
                        Ubah data
                    </ListGroup.Item>
                </ListGroup>
            </Fragment>
        )
    }
}

export default SidebarWidget;