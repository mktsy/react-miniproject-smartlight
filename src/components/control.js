import React from "react";
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/control.css'
import TextField from '@material-ui/core/TextField'
import Swal from 'sweetalert2'
import ConsumeAPI from '../services/index'

export default class Control extends React.Component {
    state = {
        lights: [],
        time: null,
        colorValue: ({
            '#ff0000': 'Red',
            '#00ff00': 'Green',
            '#0000ff': 'Blue',
            '#ffffff': 'White'
        }),
        light: [],
        image: [],
        token: '',
        color: 'off'
    }
    componentWillMount() {
        this.setState({token: localStorage.getItem('token')})
    }
    async componentDidMount() {
        const offImg = 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.15752-9/178731311_821295132073362_7773809162742776955_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeHQJvt3nZXBQ1woXJ4PaEwmSUP68acUgjdJQ_rxpxSCN4GWSI1xf5gr7Tpw7NvGu2MN4R7yPIgO2NDMsLj0Jcug&_nc_ohc=dETCz2eANy8AX8GcqFr&_nc_ht=scontent.furt1-1.fna&oh=45b16425d4ce5d1c20ba36029e92b41f&oe=60AA5A51'
        const whiteImg = 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.15752-9/178594467_293718369009562_5957749676384003173_n.png?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeHO3R0Sfy3xMsdphyM5Zu8jQC-V0PrGmwBAL5XQ-sabANcKqcf3jH3rQDbmneEHCklHyiIpiGkdKXNwKkkGZtgt&_nc_ohc=P7d-T5TQbTcAX-jWzsS&tn=HF4DCV1mt-785d2c&_nc_ht=scontent.furt1-1.fna&oh=f8042b127b218678411e931cd11d8079&oe=60AA5992'
        const redImg = 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.15752-9/178602478_593606608276353_3679520038987403525_n.png?_nc_cat=108&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeHuq6ZyJoqyBsXdA4GFeoObZIbDF1DTNoRkhsMXUNM2hCL8xzW1Rt7CFuzto11j90kk4XJLPLjNe7RlISxsOLJT&_nc_ohc=4msjMDqWZnMAX_yAyRq&_nc_ht=scontent.furt1-1.fna&oh=14e5b6e190c82e0ed922536ad5ace20d&oe=60AC0CEE'
        const greenImg = 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.15752-9/178820825_242749214080803_7740190666470688139_n.png?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeFgALbH3QrC0bpH0o47A79Giv-19JvNLY-K_7X0m80tj_pza94Hp83pYPMt1GS1aOFJ2Z-dAC20rxKLCJmBbnSW&_nc_ohc=tHlA3JGoylMAX_3Pz63&_nc_ht=scontent.furt1-1.fna&oh=e5da79913c640fe82157cd831e54857c&oe=60AA5A7F'
        const blueImg = 'https://scontent.furt1-1.fna.fbcdn.net/v/t1.15752-9/179226736_900317254144620_4675470101318124564_n.png?_nc_cat=106&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeGC27A0ODHaIx5qUWgaHqPD7tVDaH6H_WXu1UNofof9ZUHO6HZ5KGqPkwikzKmTdNTOv-3Uq6Ki6p4Vt6BF73Ht&_nc_ohc=DMoSoMpxLNoAX8IRaGI&_nc_ht=scontent.furt1-1.fna&oh=d0374499133f444d24821a2fb6f1fa73&oe=60AA9B0A'
        var pushImg = []
        pushImg.push(offImg, redImg, greenImg, blueImg, whiteImg)
        this.setState({ 
            lights: await ConsumeAPI('get', 'lights', this.state.token),
            image: pushImg,
            // image: offImg, onImg, redImg, greenImg, blueImg
        })
    }
    onOffLight = id => async () => {
        const url = 'lights/state/' + id
        this.setState({ light: await ConsumeAPI('get', 'lights/' + id, this.state.token)})
        if (this.state.light.state == false) {
            var data = {
                state: true,
                color: '#ffffff'
            }
            this.setState({light: await ConsumeAPI('patch', url, this.state.token, data)})
        } else {
            data = {
                state: false,
                color: 'off'
            }
            this.setState({light: await ConsumeAPI('patch', url, this.state.token, data)})
            console.log(this.state.light);
        }
        this.setState({lights: await ConsumeAPI('get', 'lights', this.state.token)})
    }
    alertColor = id => async () => {
        Swal.fire({
            title: 'Select color',
            input: 'radio',
            showCancelButton: true,
            inputOptions: this.state.colorValue,
            inputValidator: async (value) => {
                console.log(this.state.light.state);
                if (this.state.light.state == true) {
                    console.log('eiei');
                    const data = {
                        state: true,
                        color: value
                    }
                    const url = 'lights/state/' + id
                    const update = await ConsumeAPI('patch', url, this.state.token, data)
                    console.log(update);
                }      
            }
        }).then(async () => {
            this.setState({ 
                lights: await ConsumeAPI('get', 'lights', this.state.token)
            })
        })
    }
    handleChange = (e) => {
        
    }
    onTimeChange = id => async (e) => {
        console.log(id);
        const time = e.target.value.split(":")
        const hour = parseInt(time[0])
        const min = parseInt(time[1])
        const data = {
            setTimeOn_hour: hour,
            setTimeOn_min: min
        }
        const url = 'lights/on/' + id
        console.log(url);
        this.setState({light: await ConsumeAPI('patch', url, this.state.token, data)})
    }
    offTimeChange = id => async (e) => {
        console.log(id);
        const time = e.target.value.split(":")
        const hour = parseInt(time[0])
        const min = parseInt(time[1])
        const data = {
            setTimeOff_hour: hour,
            setTimeOff_min: min
        }
        const url = 'lights/off/' + id
        console.log(url);
        this.setState({light: await ConsumeAPI('patch', url, this.state.token, data)})
    }
    render() {

        
        return (
            <main >
                <Container >
                    <Row>
                        <Col>
                            <h1 className="mt-4 mb-5">Controller</h1>
                        </Col>
                    </Row>
                    <Card>
                    <Row>
                        <Col>
                            <Row>
                                {this.state.lights.map((data, i) => {
                                    return (
                                        <Col md={4} key={i} className="text-center mb-5 mt-5">
                                            <div>
                                                {data.color == 'off'? <Image src ={this.state.image[0]} onClick={this.onOffLight(data._id)}/>:null}
                                                {data.color == '#ff0000'? <Image src ={this.state.image[1]}onClick={this.onOffLight(data._id)}/>:null}
                                                {data.color == '#00ff00'? <Image src ={this.state.image[2]}onClick={this.onOffLight(data._id)}/>:null}
                                                {data.color == '#0000ff'? <Image src ={this.state.image[3]}onClick={this.onOffLight(data._id)}/>:null}
                                                {data.color == '#ffffff'? <Image src ={this.state.image[4]}onClick={this.onOffLight(data._id)}/>:null}
                                            </div>
                                            <div className='mb-3 mt-5'>{data.name}</div>
                                            <div className=''><button className="mv-2" onClick={this.alertColor(data._id)}>Color</button></div>
                                            <div className="i-1 mt-3" >
                                                <div>
                                                <TextField className="ml-3" id="start" label="start" type="time" defaultValue="00:00" InputLabelProps={{shrink: true,}}inputProps={{step: 300, }} onChange={this.onTimeChange(data._id)}/>
                                                <TextField className="ml-5" id="end" label="end" type="time" defaultValue="00:00" InputLabelProps={{shrink: true,}}inputProps={{step: 300, }} onChange={this.offTimeChange(data._id)}/>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })}
                            </Row>

                        </Col>
                    </Row>
                    </Card>
                </Container>
            </main>
        );
    }
}