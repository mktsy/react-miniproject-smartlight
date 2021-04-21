import React from 'react';
import { Button, Container, Row, Col, Card, Tab, Tabs} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Control extends React.Component {
    render() {
        return (
            <main>
                <Container>
                    <Row>
                        <Col>
                            <form>
                                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                    <Tab eventKey="home" title="On/Off">
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="holder.js/100px180" />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                                </Card.Text>
                                                <Button variant="primary">On</Button>
                                                <Button variant="primary" className="m-5">Off</Button>
                                            </Card.Body>
                                        </Card>
                                    </Tab>
                                    <Tab eventKey="profile" title="Color">

                                    </Tab>
                                    <Tab eventKey="contact" title="Contact" disabled>

                                    </Tab>
                                </Tabs>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </main>

        );

    }
}