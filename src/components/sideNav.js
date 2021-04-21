import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Button} from 'react-bootstrap'
import './css/sideNav.css'
import { Link } from 'react-router-dom'


export default class SideNav extends React.Component {
    render() {
        return (
            <Container fluid className="bgcolor">
                <Row align="center">
                    <Col md="12" className="mt-2" >
                        <Link to={`/dashboard`}>
                        <Button variant="secondary">Dashboard</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}