import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Login from '../../components/login'
import Navbar from '../../components/navbar'
import Control from '../../components/control'
import { Route } from 'react-router-dom'
import ChangePassword from '../../components/changePassword'
import History from '../../components/history'

export default class UserViews extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs='12' className="p-0 ">
                        <Navbar />
                    </Col> 
                </Row>
                <Row  className="mb-5">
                    <Col xs="12" className="p-0" style={{position: 'fixed', height:'100%'}}>
                        <Route path="/" component={Login} exact={true}/>
                        <Route exact path="/control" component={Control} />
                        <Route exact path="/control/changepassword/" component={ChangePassword} />
                        <Route exact path="/control/history" component={History} />
                    </Col>
                </Row>
            </Container>
        )
    }
}