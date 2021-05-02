import React from "react"
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/login.css'
import ConsumeAPI from '../services/index'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router-dom'

export default class Login extends React.Component {
    state = {
        url: 'user/login',
        method: 'post',
        role: null
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        const email = this.email.value
        const password = this.password.value
        const data = {
            email: email,
            password: password
        }

        const token = await ConsumeAPI(this.state.method, this.state.url, '', data)
        console.log(this.state.url);
        if(token != undefined) localStorage.setItem('token', (token.token))
        // console.log(localStorage.getItem('token'));
        const user = await ConsumeAPI(this.state.method, 'user/checkrole', '', token)
        if (user == undefined) {
            this.alertError()
        }   else this.setState({role: user.role})
        // console.log(user);
        // console.log(user.role);
    }  
    alertError = () => {
        Swal.fire({
            icon: 'error',
            title: 'Login failed',
            text: 'Please check your email or password.',
          })
    
    }
    render() {
        if (this.state.role == 'Admin') {
            return <Redirect to={`/dashboard`} />
        } 
        if (this.state.role == 'User') {
            return <Redirect to={`/control`} />
        }
        return (
            <main>
                <Container fluid>
                    <Row className="login-fullPage">
                        <Col md={3} className="m-auto " >
                        <Card className="p-5">
                            <Form onSubmit={this.handleSubmit}>
                                <h1>Sign In</h1> <br></br>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label >Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" required ref={(input) => this.email = input}/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" required ref={(input) => this.password = input}/>
                                </Form.Group>
                                <Button variant="primary" size="lg" block type="submit" className="mt-5 login-bg">
                                    Login
                                </Button>
                            </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}
