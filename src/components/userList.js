import React from 'react'
import { Container, Row, Col, Table, Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ConsumeAPI from '../api/index'
import './css/userList.css'
import Swal from 'sweetalert2'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'


export default class UserList extends React.Component {
    state = {
        user: [],
        somaPage: null,
        token: ''
        // userId: '607a984447c81103a8076701'
    }
    componentWillMount() {
        console.log(window.location.pathname);
        this.setState({
            token: localStorage.getItem('token')
        })
    }
    async componentDidMount() {
        // setInterval( async() => {
        this.setState({ user: await ConsumeAPI('get', 'users', this.state.token) })
        // }, 100);

    }

    alertDelete = async (data) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await ConsumeAPI('delete', 'users/' + data._id, this.state.token)
                console.log(result)
                Swal.fire(
                    'Deleted!',
                    `${result.result.name} has been deleted.`,
                    'success',
                ).then(async () => {
                    this.setState({ user: await ConsumeAPI('get', 'users', this.state.token) })
                })
            }
        })
    }
    // ChangePath = () => {
    //     this.setState({somaPage:'/eiei'})
    //     return <Redirect to={this.state.somaPage} />
    //     window.location.pathname.push('/ewsfwef')
    // }
    render() {
        // const {history} = this.props
        // if(this.state.somaPage){
        //     return <Redirect to={this.state.somaPage} />
        // }
        return (
            <Container fluid>
                <Row >
                    <Col >
                        <Card className="mt-5">
                            <Card.Header>Create User</Card.Header>
                            <Card.Body>
                                <Table striped bordered hover responsive className="table">
                                    <thead>
                                        <tr>
                                            <th className="columnNameSize">Name</th>
                                            <th className="columnLNameSize">Last Name</th>
                                            <th className="columnEmailSize">Email</th>
                                            <th className="columnRoleSize">Role</th>
                                            <th className="columnButtonSize text-center">
                                                <Link to={`/dashboard/userinfo/create`}>
                                                    <Button variant="success" size="sm" className='mr-3' ><AddIcon fontSize="small" /></Button>
                                                </Link>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.user.map((callback, index) => {
                                            return (
                                                // <Switch>
                                                <tr key={index}>
                                                    <td>{callback.name}</td>
                                                    <td>{callback.lastName}</td>
                                                    <td>{callback.email}</td>
                                                    <td>{callback.role}</td>
                                                    <td>
                                                        <Col className="text-center">
                                                            <span className="ml-2">
                                                            <Link to={`/dashboard/userinfo/${callback._id}`}>
                                                                <Button variant="warning" size="sm"><EditIcon fontSize="small" /></Button>
                                                            </Link>
                                                            </span><span className="ml-2"></span>
                                                            <span>
                                                            <Button variant="danger" size="sm" onClick={() => this.alertDelete(callback)} ><DeleteIcon fontSize="small" /></Button>
                                                            </span>
                                                        </Col>
                                                    </td>
                                                </tr>
                                                // <Route path="/dashboard/607a96a1f7475e14c412537f" component={NotFound} />
                                                // </Switch>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        {/* {this.state.user.map((data, index) => {
                            return (
                                <div key={index}>

                                    {data._id == this.state.userId?
                                    <div>{data.name}</div>
                                    :<div></div>}
                                    {data._id}
                                </div>
                            )
                        })} */}
                    </Col>
                </Row>
                {/* <Button onClick={this.ChangePath}>Button</Button> */}
            </Container>
        )
    }
}