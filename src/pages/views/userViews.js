import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Login from '../../components/login'
import Navbar from '../../components/navbar'
import Control from '../../components/control'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

export default class UserViews extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs='12' className="p-0">
                        <Navbar />
                    </Col>
                </Row>
                <Row  >
                    <Col xs="12" className="p-0" style={{position: 'fixed', height:'100%'}}>
                        <Route path="/" component={Login} exact={true}/>
                        <Route path="/control" component={Control} />
                    </Col>
                    {/* <Col xs={{ span: 10, offset: 2 }}>
                    <Route path="/dashboard" component={UserList} exact={true}/>
                    <Route path="/dashboard/:userinfo" component={UserForm} />
                        <UserList />
                    </Col> */}
                </Row>
            </Container>
        )
    }
}