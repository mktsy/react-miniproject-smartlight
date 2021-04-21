import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export default class NavBar extends React.Component {
    render() {
        return (
            <hee>
                <Navbar bg="dark" variant="dark" expand="lg" className="nav">
                    <Navbar.Brand href="#home" className="smart">Smart Light</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                                
                            <Nav.Link href="#link">Contract</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </hee>
        );
    }
}