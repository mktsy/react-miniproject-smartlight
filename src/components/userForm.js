import React from 'react'
import { Form, Card, Row, Col, Button } from 'react-bootstrap'
import UserList from '../components/userList'
import ConsumeAPI from '../api/index'

export default class UserForm extends React.Component {
    state = {
        user: [],
        // userId: '607a984447c81103a8076701'
    }
    async componentDidMount() {
        console.log(window.location.pathname);
        const pathName = window.location.pathname
        var mainPath = pathName.split('/')
        const userId = mainPath[mainPath.length - 1]

        if (userId == 'create') {
            console.log('')
        }
        else {
            this.setState({ user: await ConsumeAPI('get', `users/${userId}`) })
        }
    }
    onSubmit = () => {
        console.log(this.state.user)
    }
    render() {
        return (
            <Card className="mt-5">
                <Card.Header>Create User</Card.Header>
                <Card.Body>
                    <Form className="m-2">
                        <Row>
                            <Col>
                                <Form.Group >
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control id="name" type="text" placeholder="First Name" value={this.state.user.name} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group >
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control id="lastName" type="text" placeholder="Last name" value={this.state.user.lastName} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control id="email" type="email" placeholder="name@example.com" value={this.state.user.email} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control id="password" type="password" placeholder="Password" value={this.state.user.password} />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group >
                                    <Form.Label>Pin</Form.Label>
                                    <Form.Control id="pin" type="password" placeholder="1112" value={this.state.user.pin} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group >
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control id="role" type="text" placeholder="User" value={this.state.user.role} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit" onClick={this.onSubmit}>Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}