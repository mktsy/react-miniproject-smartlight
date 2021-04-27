import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from '../../components/navbar'
import SideNav from '../../components/sideNav'
import UserList from '../../components/userList'
import UserForm from '../../components/userForm'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './css/dashBoard.css'
import ChangePassword from '../../components/changePassword'


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
                    <Route exact path="/dashboard" component={UserList} exact={true}/>
                    <Route exact path="/dashboard/userinfo/:userinfo" component={UserForm} />
                    <Route exact path="/dashboard/changepassword" component={ChangePassword} />
                        {/* <UserList /> */}
                    </Col>
                </Row>
            </Container>
        )
    }
}