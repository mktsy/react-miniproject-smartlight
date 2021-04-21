import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import './css/navbar.css'

export default class NavBar extends React.Component {
    componentWillMount() {
        console.log(window.location.pathname);
    }
    navbar() {
        var pathname = window.location.pathname
        console.log(typeof(pathname));
        var bool = pathname.includes('dashboard')
        var name = pathname.includes('control')
        if (bool) {
            return <NavDashboard />
        } else {
            if (name) return <NavLogout />
            return <NavUser />
        }
        var bool = pathname.includes('control')
        if (bool) return <NavLogout />
    }
    render() {
        return (
            <div>{this.navbar()}</div>
        )
    }
}

const NavDashboard = () => {
    return (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown alignRight id="collasible-nav-dropdown" title={
                        <span>
                            <Image className="image-admin" src="https://www.westsidepetvet.com/images/template/intro-cat.png" roundedCircle />
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
            </Navbar>)
}

const NavUser = () => {
    return (<Navbar bg="dark" variant="dark" expand="lg" className="nav">
                <Navbar.Brand href="#home" className="smart">Smart Light</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <Nav.Link href="#link">Contract</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>)
}

const NavLogout = () => {
    return (<Navbar bg="dark" variant="dark" expand="lg" className="nav">
    <Navbar.Brand href="#home" className="smart">Smart Light</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown alignRight id="collasible-nav-dropdown" title={
                        <span>
                            <Image className="image-user" src="https://www.interpharma.co.th/wp-content/uploads/2018/08/dog-1-300x214.png" roundedCircle />
                        </span>}>
                        <NavDropdown.Item href="#action/3.1">Name</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Contract</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Sign out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        
    </Navbar.Collapse>
</Navbar>)
}