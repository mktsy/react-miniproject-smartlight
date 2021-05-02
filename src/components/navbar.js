import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './css/navbar.css'
import ConsumeAPI from '../services/index'
import Swal from 'sweetalert2'

export default class NavBar extends React.Component {
    componentWillMount() {
        console.log(window.location.pathname);
    }
    navbar() {
        var pathname = window.location.pathname
        var bool = pathname.includes('dashboard')
        var name = pathname.includes('control')
        if (bool) {
            return <NavDashboard />
        } else {
            if (name) return <NavSetting />
            return <NavUser />
        }
        // var bool = pathname.includes('control')
        // if (bool) return <NavSetting />
    }
    render() {
        return (
            <div>{this.navbar()}</div>
        )
    }
}

const NavDashboard = () => {
    return (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
            <Navbar.Brand href="#home">Smart Lighting</Navbar.Brand>
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
                        
                        <NavDropdown.Item onClick={clearLocalStorage}><Link to={`/`}>Sign out </Link></NavDropdown.Item>
                        
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>)
}

const NavUser = () => {
    return (<Navbar bg="dark" variant="dark" expand="lg" className="nav">
                <Navbar.Brand href="#home" className="smart">Smart Lighting</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            </Navbar>)
}

const NavSetting = () => {
    const getBill = async () => {
        const token = localStorage.getItem('token')
        const bill = await ConsumeAPI('get', 'lastbill', token)
        const id = bill._id
        const sDate = new Date(bill.startDate).toLocaleDateString()
        const sDateM = sDate.split('/')
        const now = new Date().toLocaleDateString()
        const nowM = now.split('/')
        
        if (sDateM[0] == nowM[1]) {
            await ConsumeAPI('patch', 'bill/' + id, token)
        } else {
            await ConsumeAPI('patch', 'bill/' + id, token)
            const data = {
                bill: 0,
                startDate: now
            }
            await ConsumeAPI('post', 'bills', token, data)
        }
        const showBill = await ConsumeAPI('get', 'lastbill', token)
        Swal.fire({
            icon: 'info',
            title: `Electricity bill: ${showBill.bill} baht`,
            footer: '<a href=https://www.mea.or.th/aboutelectric/116/280/form/11>Reference</a>'
          })
    }
    
    return (<Navbar bg="dark" variant="dark" expand="lg" className="nav">
    <Navbar.Brand href="#home" className="smart">Smart Lighting</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown alignRight id="collasible-nav-dropdown" title={
                        <span>
                            <Image className="image-user" src="https://www.interpharma.co.th/wp-content/uploads/2018/08/dog-1-300x214.png" roundedCircle />
                        </span>}>
                        <NavDropdown.Item onClick={getBill}>Electricity bill</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2" >Contract</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={clearLocalStorage}>Sign out</NavDropdown.Item>
                        
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        
    </Navbar.Collapse>
</Navbar>)
}

function clearLocalStorage() {
    localStorage.removeItem('token')
}