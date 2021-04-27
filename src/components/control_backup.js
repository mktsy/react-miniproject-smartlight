import React from "react";
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/control.css'
import TextField from '@material-ui/core/TextField'
import Swal from 'sweetalert2'


export default class Control extends React.Component {
    state = {
        lightState: true,
        time: null,
        color: ({'#ff0000': 'Red',
                '#00ff00': 'Green',
                '#0000ff': 'Blue',
                '#ffffff': 'White'})
    }
    onOffLight = () => {
        if (this.state.lightState == false) {
            this.setState({ lightState: true })
        } else {
            this.setState({ lightState: false })
        }
        console.log(this.state.lightState);
    }
    handleChange = (e) => {
        const target = e.target
        this.setState({ time: e.target.value})
        console.log(typeof(this.state.time));
        console.log(this.state.time);
    }
    alertColor = () => {
        Swal.fire({
            title: 'Select color',
            input: 'radio',
            showCancelButton: true,
            inputOptions: this.state.color,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to choose something!'
                }
                console.log(value);
            }
        })
    }
    render() {
        return (

            <main >
                <Container >
                    <Row>
                        <Col>
                            <h1 className="mt-4">Controller</h1>
                        </Col>
                    </Row>
                    <Card>
                        <Row className="m-3">

                            <Col className="text-center">
                                <div>
                                    <Image onClick={this.onOffLight} src="https://scontent.furt1-1.fna.fbcdn.net/v/t1.15752-9/175027898_460013871996648_1163857027088897756_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeEyH4CjPkI_1IOYaiHSL80ODoYort_Q2AIOhiiu39DYAjadJkAKNnyug8p-GqV966oEyjN2QwGlTfdIPb0l4e7m&_nc_ohc=yQINTitWS_IAX-Psvmz&_nc_ht=scontent.furt1-1.fna&oh=5ddd50c96626c7f92de0daef6dcd3b8d&oe=60A6264C" />
                                </div>
                                <div>
                                    <button className="mv-2" onClick={this.alertColor}>Color</button>
                                    <div className="i-1" />
                                    
                                        <TextField
                                            id="time"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                    
                                            onChange={(e) => this.handleChange(e)}
                                        />
                                    

                                </div>
                                <div>
                                    <p className='mac'>Front yard</p>
                                </div>

                            </Col>

                            <Col className="text-center">
                                <div>
                                    <Image onClick={this.onOffLight} src="https://scontent.furt1-1.fna.fbcdn.net/v/t1.15752-9/175027898_460013871996648_1163857027088897756_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeEyH4CjPkI_1IOYaiHSL80ODoYort_Q2AIOhiiu39DYAjadJkAKNnyug8p-GqV966oEyjN2QwGlTfdIPb0l4e7m&_nc_ohc=yQINTitWS_IAX-Psvmz&_nc_ht=scontent.furt1-1.fna&oh=5ddd50c96626c7f92de0daef6dcd3b8d&oe=60A6264C" />
                                </div>
                                <div>
                                    <button className="mv-2">Color</button>
                                    <div className="i-1" />
                                    <form noValidate>
                                        <TextField
                                            id="time"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                        />
                                    </form>
                                </div>
                                <div>
                                    <p className='mac'>Living room</p>
                                </div>
                            </Col>
                            <Col className="text-center">
                                <div>
                                    <Image src="https://scontent.furt1-1.fna.fbcdn.net/v/t1.15752-9/175027898_460013871996648_1163857027088897756_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeEyH4CjPkI_1IOYaiHSL80ODoYort_Q2AIOhiiu39DYAjadJkAKNnyug8p-GqV966oEyjN2QwGlTfdIPb0l4e7m&_nc_ohc=yQINTitWS_IAX-Psvmz&_nc_ht=scontent.furt1-1.fna&oh=5ddd50c96626c7f92de0daef6dcd3b8d&oe=60A6264C" />
                                </div>
                                <div>
                                    <button className="mv-2">Color</button>
                                    <div className="i-1" />

                                    <form noValidate>
                                        <TextField
                                            id="time"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                        />
                                    </form>
                                </div>
                                <div>
                                    <p className='mac'>Bedroom</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="m-3">
                            <Col className="text-center">

                                <div>
                                    <Image src="https://scontent.furt1-1.fna.fbcdn.net/v/t1.15752-9/175027898_460013871996648_1163857027088897756_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeEyH4CjPkI_1IOYaiHSL80ODoYort_Q2AIOhiiu39DYAjadJkAKNnyug8p-GqV966oEyjN2QwGlTfdIPb0l4e7m&_nc_ohc=yQINTitWS_IAX-Psvmz&_nc_ht=scontent.furt1-1.fna&oh=5ddd50c96626c7f92de0daef6dcd3b8d&oe=60A6264C" />
                                </div>
                                <div>
                                    <button className="mv-2">Color</button>
                                    <div className="i-1" />
                                    <form noValidate>
                                        <TextField
                                            id="time"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                        />
                                    </form>
                                </div>
                                <div>
                                    <p className='mac'>Kitchen</p>
                                </div>
                            </Col>
                            <Col className="text-center">
                                <div>
                                    <Image src="https://scontent.furt1-1.fna.fbcdn.net/v/t1.15752-9/175027898_460013871996648_1163857027088897756_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeEyH4CjPkI_1IOYaiHSL80ODoYort_Q2AIOhiiu39DYAjadJkAKNnyug8p-GqV966oEyjN2QwGlTfdIPb0l4e7m&_nc_ohc=yQINTitWS_IAX-Psvmz&_nc_ht=scontent.furt1-1.fna&oh=5ddd50c96626c7f92de0daef6dcd3b8d&oe=60A6264C" />
                                </div>
                                <div>
                                    <button className="mv-2">Color</button>
                                    <div className="i-1" />
                                    <form noValidate>
                                        <TextField
                                            id="time"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                        />
                                    </form>
                                </div>
                                <div>
                                    <p className='mac'>Toilet</p>
                                </div>
                            </Col>
                            <Col className="text-center">
                                <div>
                                    <Image src="https://scontent.furt1-1.fna.fbcdn.net/v/t1.15752-9/175027898_460013871996648_1163857027088897756_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeEyH4CjPkI_1IOYaiHSL80ODoYort_Q2AIOhiiu39DYAjadJkAKNnyug8p-GqV966oEyjN2QwGlTfdIPb0l4e7m&_nc_ohc=yQINTitWS_IAX-Psvmz&_nc_ht=scontent.furt1-1.fna&oh=5ddd50c96626c7f92de0daef6dcd3b8d&oe=60A6264C" />
                                </div>
                                <div>
                                    <button className="mv-2">Color</button>
                                    <div className="i-1" />
                                    <form noValidate>
                                        <TextField
                                            id="time"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                        />
                                    </form>
                                </div>
                                <div>
                                    <p className='mac'>Backyard</p>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </main>
        );
    }
}