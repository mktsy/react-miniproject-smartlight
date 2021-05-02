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
            <Navbar.Brand ><img className="image-logo" src="https://scontent.furt1-1.fna.fbcdn.net/v/t1.15752-9/181847892_118352763608100_5795919155622860752_n.png?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeGzG8n8lbzelzCPSQ8U29JqU9gpF2We2gNT2CkXZZ7aA-OudBaJd3wTYyPZoY3NRZPCj3S-AljD3kIRGUwWBOXl&_nc_ohc=coewRcGaqdsAX-3K7XG&_nc_ht=scontent.furt1-1.fna&oh=f83ed2b138f2a35dae9b2f5453b763d6&oe=60B547A7" /> Toy</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown alignRight id="collasible-nav-dropdown" title={
                        <span>
                            <Image className="image-admin" src="https://www.westsidepetvet.com/images/template/intro-cat.png" roundedCircle />
                        </span>}>
                        <NavDropdown.Item onClick={clearLocalStorage}><Link to={`/`} className="text-dark" activeClassName="active">Sign out</Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>)
}

const NavUser = () => {
    return (<Navbar bg="dark" variant="dark" expand="lg" className="nav">
                <Navbar.Brand className="smart"><img className="image-logo" src="https://scontent.furt1-1.fna.fbcdn.net/v/t1.15752-9/181847892_118352763608100_5795919155622860752_n.png?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeGzG8n8lbzelzCPSQ8U29JqU9gpF2We2gNT2CkXZZ7aA-OudBaJd3wTYyPZoY3NRZPCj3S-AljD3kIRGUwWBOXl&_nc_ohc=coewRcGaqdsAX-3K7XG&_nc_ht=scontent.furt1-1.fna&oh=f83ed2b138f2a35dae9b2f5453b763d6&oe=60B547A7" /> Smart Lighting</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            </Navbar>)
}

const NavSetting = () => {
    const getBill = async () => {
        const token = localStorage.getItem('token')
        var bill = await ConsumeAPI('get', 'lastbill', token)
        const id = bill._id
        const sDate = new Date(bill.startDate).toISOString()
        const dataMonth= sDate.slice(5, 7)
        const now = new Date(2021,4,2).toISOString()
        const nowMonth = now.slice(5, 7)
        if (dataMonth == nowMonth) {
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
    <Link to={`/control`}>
    <Navbar.Brand className="smart"><img className="image-logo" src="https://scontent.furt1-1.fna.fbcdn.net/v/t1.15752-9/181847892_118352763608100_5795919155622860752_n.png?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeGzG8n8lbzelzCPSQ8U29JqU9gpF2We2gNT2CkXZZ7aA-OudBaJd3wTYyPZoY3NRZPCj3S-AljD3kIRGUwWBOXl&_nc_ohc=coewRcGaqdsAX-3K7XG&_nc_ht=scontent.furt1-1.fna&oh=f83ed2b138f2a35dae9b2f5453b763d6&oe=60B547A7" /> Home</Navbar.Brand>
    </Link>
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
                        <NavDropdown.Item ><Link to={`/control/history`} className="text-dark" activeClassName="active">History</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item ><Link to={`/control/changepassword`} className="text-dark" activeClassName="active">Change password</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item  onClick={clearLocalStorage}><Link to={`/`} className="text-dark" activeClassName="active">Sign out</Link></NavDropdown.Item>
                        
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        
    </Navbar.Collapse>
</Navbar>)
}

function clearLocalStorage() {
    localStorage.removeItem('token')
}