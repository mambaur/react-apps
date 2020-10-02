import React, {Component, Fragment} from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

class NavbarClass extends Component {
    render(){
        return (
            <Fragment>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Project Latihan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/* Dummy */}
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Home</Nav.Link>
                            <Nav.Link href="#memes">
                                List
                            </Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        )
    }
}

export default NavbarClass;