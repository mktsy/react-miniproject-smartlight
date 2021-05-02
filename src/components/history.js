import React from 'react'
import { Container, Row, Col, Table, Button, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ConsumeAPI from '../services/index'
import './css/userList.css'
import Swal from 'sweetalert2'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'

export default class History extends React.Component {
    state = {
        bill: [],
        token: ''
    }
    componentWillMount() {
        this.setState({
            token: localStorage.getItem('token')
        })
    }
    async componentDidMount() {
        this.setState({ bill: await ConsumeAPI('get', 'bills', this.state.token) })
    }
    render() {
        return (
            <Container fluid>
                <Row >
                    <Col >
                        <Card className="mt-5">
                            <Card.Header>History</Card.Header>
                            <Card.Body>
                                <Table striped bordered hover responsive className="table">
                                    <thead>
                                        <tr>
                                            <th className="columnNameSize">Name</th>
                                            <th className="columnLNameSize">Last Name</th>
                                            <th className="columnButtonSize text-center">
                                                <Link to={`/dashboard/userinfo/create`}>
                                                    <Button variant="success" size="sm" className='mr-3' ><AddIcon fontSize="small" /></Button>
                                                </Link>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.bill.map((callback, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{callback.bill}</td>
                                                    <td>{callback.startDate}</td>
                                                    <td>
                                                        <Col className="text-center">
                                                            <span className="ml-2">
                                                            <Link to={`/dashboard/userinfo/${callback._id}`}>
                                                                <Button variant="warning" size="sm"><EditIcon fontSize="small" /></Button>
                                                            </Link>
                                                            </span><span className="ml-2"></span>
                                                            <span>
                                                            <Button variant="danger" size="sm"><DeleteIcon fontSize="small" /></Button>
                                                            </span>
                                                        </Col>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}