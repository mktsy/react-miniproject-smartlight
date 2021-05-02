import React from 'react'
import { Form, Card, Row, Col, Button, Container } from 'react-bootstrap'
import Swal from 'sweetalert2'
import ConsumeAPI from '../services/index'
import { Redirect, Link } from 'react-router-dom'

export default class ChangePassword extends React.Component {
    state = {
        user: [],
        token: '',
        pass: false
    }
    componentWillMount() {
        this.setState({
            token: localStorage.getItem('token')
        })
    }
    async componentDidMount() {
        const data = {
            token: this.state.token
        }
        this.setState({
            user: await ConsumeAPI('post', 'user/checkrole', this.state.token, data)
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        const oldPass = this.old.value
        const newPass = this.new.value
        const conPass = this.confirm.value
        const data = {
            email: this.state.user.email,
            password: oldPass,
            newpassword: conPass
        }
        if (newPass == conPass) {
            await ConsumeAPI('post', 'changepassword', this.state.token, data)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Password has been changed.`,
                text: `Please don't forget your password`
            })
            .then(() => {
                this.setState({ pass: true })
            })
            
        } else {
            this.alertError()
        }
    }
    alertError = () => {
        Swal.fire({
            icon: 'error',
            title: 'Failed to change password',
            text: 'Please enter the same password to confirm it.',
          })
    }
    render() {
        if (this.state.pass) {
            return <Redirect to={'/control'} />
        }
        return (
            <Container>
                <Row>
                    <Col>
                        <Card className="mt-5">
                            <Card.Header>Change Password</Card.Header>
                            <Col>
                                <Card.Body>
                                    <Form className="m-2" onSubmit={this.handleSubmit}>
                                        <Row>
                                            <Col>
                                                <Form.Group >
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="email" defaultValue={this.state.user.email} readOnly />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group >
                                                    <Form.Label>Old password</Form.Label>
                                                    <Form.Control type="password" placeholder="old password" required ref={(input) => this.old = input} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group >
                                                    <Form.Label>New password</Form.Label>
                                                    <Form.Control type="password" placeholder="new password" required ref={(input) => this.new = input} />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group >
                                                    <Form.Label>Confirm password</Form.Label>
                                                    <Form.Control type="password" placeholder="confirm password" required ref={(input) => this.confirm = input} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="text-right">
                                                <Button variant="primary" type="submit">
                                                    Change Password
                                                </Button>
                                                <Link to={'/control'}>
                                                    <Button className='ml-3' variant="danger" onClick={(this.alertCancel)}>Cancel</Button>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Card.Body>
                            </Col>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}