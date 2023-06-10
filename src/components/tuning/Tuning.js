import NavigationBar from "../shared/NavigationBar";
import landingPageImage from "../../resources/tuning/landingPageImage.webp"
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState, useRef } from "react";
import Modal from 'react-bootstrap/Modal';
import Ratio from "react-bootstrap/Ratio";

import mech3 from '../../resources/shared/mechanicPictures/Picture3.jpg';
import mech5 from '../../resources/shared/mechanicPictures/Picture5.jpg';

function Tuning() {
    const [show, setShow] = useState(false);

    const form = useRef(null);

    const handleClose = () => setShow(false);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setShow(true);
    };

    const submitForm = () => {
        form.current.submit();        
    };

    return(
        <div className="Tuning">
            <NavigationBar></NavigationBar>
            <Container className='d-flex align-center justify-content-center bg-light'>
                <Image src={landingPageImage} fluid className='mt-2'/>
            </Container>
            <Container className='d-flex align-center justify-content-center bg-light mt-2'>
                <h4>Tuning</h4>
            </Container>
            <Container className='d-flex mt-3'>
                <p>
                    Car tuning refers to the process of modifying a vehicle's electronic components, like its ECU or TCU, to optimize its power, torque, handling, and driving experience. Tuning involves making adjustments and enhancements to various components and systems of the vehicle to achieve desired performance outcomes.
                </p>
            </Container>
            <Container className='d-flex'>
                <h5>Description and Costs</h5>
            </Container>
            <Container className='d-flex'>
                <Table>
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Description</th>
                            <th>Time Estimate</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Consultation
                            </td>
                            <td>
                                We can take a look at your perfromance goals and develop a plan to reach them
                            </td>
                            <td>
                                1 hour
                            </td>
                            <td>
                                $100
                            </td>

                        </tr>
                        <tr>
                            <td>
                                OTS Tune Install
                            </td>
                            <td>
                                Installation of pre-configured tunes purchased from a third party
                            </td>
                            <td>
                                30 minutes
                            </td>
                            <td>
                                $100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Custom Tuning
                            </td>
                            <td>
                                Custom created tunes for your perfromance goals
                            </td>
                            <td>
                                4 hours
                            </td>
                            <td>
                                $2000
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={5}>Other services are available on request. Please reach out and we can figure out how best to assist you!</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            <Container className='d-flex align-center justify-content-center container-fluid mt-2 bg-light'>
                <h5 className='mt-2'>Our Specialists</h5>
            </Container>
            <Container className='d-flex align-center justify-content-center container-fluid bg-light'>
                <Card style={{ width: '22rem' , height: "500px", margin: 5}}>
                  <Card.Img variant="top" src={mech5} />
                  <Card.Body>
                    <Card.Title className='text-center'>Nat</Card.Title>
                    <Card.Text>
                      Nat has been a mechanic for 16 years and specializes in all vehicle electronics.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '22rem' , height: "500px", margin: 5}}>
                    <Card.Img variant="top" src={mech3} />
                    <Card.Body>
                    <Card.Title className='text-center'>Mark</Card.Title>
                    <Card.Text>
                        Mark has been a tuner for 15 years and
                        handles all of our in house ECU tuning for all types of vehicles.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <Container className='align-center justify-content-center container-fluid mt-3'>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Booking</Card.Title>
                                    <Form ref={form} onSubmit={handleFormSubmit}>
                                        <Form.Group className='mb-3' controlId='formName'>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="name" placeholder='Enter name' />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email"/>
                                            <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className='mb-3' controlId='formSelection'>
                                            <Form.Label>Specialists</Form.Label>
                                            <Form.Select>
                                                <option selected>Select a specialist</option>
                                                <option>Mark</option>
                                                <option>Nat</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className='mb-3' controlId='formSelection'>
                                            <Form.Label>Service</Form.Label>
                                            <Form.Select>
                                                <option selected>Select a service</option>
                                                <option>Consultation</option>
                                                <option>OTS Tune Install</option>
                                                <option>Custom Tuning</option>
                                                <option>Other</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className='mb-3' controlId='formSelection'>
                                            <Form.Label>Date</Form.Label>
                                            <Form.Control type="date" placeholder="Select date"/>
                                        </Form.Group>

                                        <Form.Group className='mb-3' controlId='formSelection'>
                                            <Form.Label>Time</Form.Label>
                                            <Form.Select>
                                                <option selected>Select a time</option>
                                                <option>9:00 AM</option>
                                                <option>10:00 AM</option>
                                                <option>11:00 AM</option>
                                                <option>12:00 PM</option>
                                                <option>1:00 PM</option>
                                                <option>2:00 PM</option>
                                                <option>3:00 PM</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className='mb-3' controlId='formMessage'>
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control placeholder='Enter message'/>
                                        </Form.Group>
                                        <Button variant='dark' type="submit">
                                            Send
                                        </Button>
                                    </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>Availabilty</Card.Title>
                                <Ratio>
                                    <iframe title="availabilityCalender" src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=America%2FToronto&showTitle=0&showNav=1&showDate=1&showTabs=0&showPrint=0&showCalendars=0&mode=WEEK&src=YzhlOGVmYmZkOWJjNTNkNDNlYjI5NGRhMDRmNGUzMTg3ZmJjNTNjMmMzNDRlNzJhYWUxNGVhZTM4OWVhYzFkOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4"></iframe>
                                </Ratio>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className='d-flex align-center justify-content-center container-fluid mt-3'>
                <p className='mt-2'>PITSTOP PERFORMANCE © 2023</p>
            </Container>

            <Modal show={show} onHide={handleClose} size="lg" backdrop="static" keyboard={false} centered>
                <Modal.Header>
                <Modal.Title>Booking Recieved!</Modal.Title>
                </Modal.Header>
                <Modal.Body>A confirmation email has been sent<br/>See you soon!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={submitForm}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Tuning;