import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from '../../components/navbar'
import SideNav from '../../components/sideNav'
import UserList from '../../components/userList'
import NotFound from '../../components/notFound'
import UserForm from '../../components/userForm'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './css/dashBoard.css'


export default class DashBoard extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs='12' className="p-0 mt-5">
                        <Navbar />
                    </Col>
                </Row>
                <Row  >
                    <Col xs="2" className="p-0 pt-3" style={{position: 'fixed', height:'100%', backgroundColor:'#4E5154'}}>
                        <SideNav />
                    </Col>
                    <Col xs={{ span: 10, offset: 2 }}>
                    <Route path="/dashboard" component={UserList} exact={true}/>
                    <Route path="/dashboard/:userinfo" component={UserForm} />
                        {/* <UserList /> */}
                    </Col>
                </Row>
            </Container>
        )
    }
}