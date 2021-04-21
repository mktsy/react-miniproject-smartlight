import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, NavDropdown, Image} from 'react-bootstrap'
import './css/navbar.css'

export default class NavBar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown alignRight id="collasible-nav-dropdown" title={
                        <span>
                            <Image className="image" src="https://img.wongnai.com/p/256x256/2019/12/17/97fde61cf73e4efa98e5fdd577e1ac2a.jpg" roundedCircle />     
                        </span>}>
                        <NavDropdown.Item href="#action/3.1">Name</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Help</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Sign out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}