import React from 'react'
import { Form, Card, Row, Col, Button } from 'react-bootstrap'
import ConsumeAPI from '../services/index'
import SaveIcon from '@material-ui/icons/Save';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './css/userForm.css'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router-dom'

export default class UserForm extends React.Component {
    state = {
        user: [],
        userId: null,
        method: 'post',
        buttonType: 'success',
        confirmType: 'create',
        token: '',
        read: false
        // button: 'Create'
        // userId: '607a984447c81103a8076701'
    }
    componentWillMount() {
        console.log(window.location.pathname);
        const pathName = window.location.pathname
        var mainPath = pathName.split('/')
        this.setState({
            userId: mainPath[mainPath.length - 1],
            token: localStorage.getItem('token')
        })
        // console.log(this.state.userId);
    }
    async componentDidMount() {
        console.log(this.state.userId)
        console.log(this.state.token)
        if (this.state.userId != 'create') {
            this.setState({
                user: await ConsumeAPI('get', `users/${this.state.userId}`, this.state.token),
                method: 'patch',
                buttonType: 'warning',
                page: '',
                confirmType: 'update',
                read: true

                // button: 'Save'
            })
        }
        console.log(this.state.method)

    }
    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.name.value
        const lastName = this.lastName.value
        const email = this.email.value
        const password = this.password.value
        const pin = this.pin.value
        const role = this.role.value

        const data = {
            name,
            lastName,
            email,
            password,
            pin, role
        }
        this.alertConfirm(data)
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
    alertConfirm = (data) => {
        console.log(this.state.confirmType);
        Swal.fire({
            title: `Confirm ${this.state.confirmType} !`,
            text: `The user data will be ${this.state.confirmType}.`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: `Yes, ${this.state.confirmType} user data.`,
        }).then( async (result) => {
            if (result.isConfirmed) {
                var url = 'users'
                url += this.state.userId != 'create' ? '/' + this.state.userId : ''
                const cb = await ConsumeAPI(this.state.method, url, this.state.token, data)
                if (cb != undefined) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `User data has been ${this.state.confirmType}.`,
                        text: `User data ${this.state.confirmType} successfully.`
                    })
                    .then(() => {
                        this.setState({ page: '/dashboard' })
                    })
                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: `Email exist.`,
                        text: `please change email.`,
                    })
                }
                // setTimeout(() => {
                //     this.setState({page: '/dashboard'})
                // }, 1000)   
            }
        })
    }

    render() {
        var icon = <AddCircleIcon fontSize="default" />
        if (this.state.userId != 'create') {
            icon = <SaveIcon fontSize="default" />
        }
        if (this.state.page) {
            return <Redirect to={this.state.page} />
        }
        return (
            <Card className="mt-5">
                <Card.Header>Create User</Card.Header>
                <Card.Body>
                    <Form className="m-2" onSubmit={this.handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group >
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="First Name" defaultValue={this.state.user.name} ref={(input) => this.name = input} required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group >
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control type="text" placeholder="Last name" defaultValue={this.state.user.lastName} ref={(input) => this.lastName = input} required/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" defaultValue={this.state.user.email} ref={(input) => this.email = input} required readOnly={this.state.read}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" defaultValue={this.state.user.password} ref={(input) => this.password = input} required readOnly={this.state.read}/>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group >
                                    <Form.Label>Pin</Form.Label>
                                    <Form.Control type="password" placeholder="1112" defaultValue={this.state.user.pin} ref={(input) => this.pin = input} required readOnly={this.state.read}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group >
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control as="select" type="text" placeholder="User" defaultValue={this.state.user.role} ref={(input) => this.role = input}>
                                        <option>User</option>
                                        <option>Admin</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row >
                            <Col className="text-right">
                            <Button variant={this.state.buttonType} type="submit">
                                    {icon}
                                </Button>
                                <Button className='ml-3' variant="danger" onClick={(this.alertCancel)}>Cancel</Button>
                            </Col>
                            {/* <Col xs={{ span: 2, offset: 8 }}>
                                
                            </Col>
                            <Col xs={2}>
                            </Col> */}
                            {/* <Col >
                                <Button variant="danger">eiei</Button>
                            </Col> */}
                            {/* <Col md={11}>
                            </Col>
                            <Col md={1}>
                            <Button variant={this.state.buttonType} type="submit" >
                                    {icon}
                                </Button>
                            </Col> */}
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}