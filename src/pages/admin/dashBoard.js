import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from '../../components/navbar'
import SideNav from '../../components/sideNav'
import UserList from '../../components/userList'
import NotFound from '../../components/notFound'
import UserForm from '../../components/userForm'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


export default class DashBoard extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md='12' className="p-0">
                        <Navbar />
                    </Col>
                </Row>
                <Row >
                    <Col md="2" className="p-0" >

                        <SideNav />
                    </Col>
                    <Col md="8" className="m-auto">
                    <Route path="/dashboard" component={UserList} exact={true}/>
                    <Route path="/dashboard/:userinfo" component={UserForm} />
                        {/* <UserList /> */}
                    </Col>
                </Row>
            </Container>
        )
    }
}