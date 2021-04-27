import React from 'react'
import { Form, Card, Row, Col, Button, Container } from 'react-bootstrap'
import Swal from 'sweetalert2'

export default class ChangePassword extends React.Component {
    state = {
        user: []
    }
    async componentWillMount() {
        this.setState({

        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const oldPassword = this.old.value
        const newPassword = this.new.value
        const confirmPassword = this.confirm.value
        const data = {
            oldPassword,
            newPassword,
            confirmPassword
        }
        var con_data = JSON.stringify(data)
    }
    alertCancel = () => {
        Swal.fire({
            title: 'Confirm cancel?',
            text: "The data will not be saved.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, back to dashboard!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.setState({ page: '/dashboard' })
            }
        })
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <Card className="mt-5">
                            <Card.Header>Change Password</Card.Header>
                            <Col>
                                <Card.Body>
                                    <Form className="m-2" >
                                        <Row>
                                            <Col>
                                                <Form.Group >
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="password"  required ref={(input) => this.old = input} readOnly/>
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
                                                    <Form.Control type="password" placeholder="confirm password" required ref={(input) => this.confirmm = input} />
                                                </Form.Group>
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