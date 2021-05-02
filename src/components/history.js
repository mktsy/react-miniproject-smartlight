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
            <Container>
                <Row >
                    <Col >
                        <Card className="mt-5">
                            <Card.Header>History</Card.Header>
                            <Card.Body>
                                <Table striped bordered hover responsive className="table">
                                    <thead>
                                        <tr>
                                            <th className="columnNoSize">No.</th>
                                            <th className="columnBillSize">Price (baht)</th>
                                            <th className="columnDateSize">Date (y/m/d)</th>
                                             
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.bill.map((callback, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{callback.bill}</td>
                                                    <td>{callback.startDate.slice(0, 10)}</td>
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