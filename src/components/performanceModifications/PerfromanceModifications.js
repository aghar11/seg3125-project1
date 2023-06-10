import NavigationBar from "../shared/NavigationBar";
import landingPageImage from "../../resources/perfromanceModifications/landingPageImage.webp"
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

import mech1 from '../../resources/shared/mechanicPictures/Picture1.jpg';
import mech2 from '../../resources/shared/mechanicPictures/Picture2.jpg';
import mech6 from '../../resources/shared/mechanicPictures/Picture6.webp';

function PerformanceModifications() {
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
        <div className="PerformanceModifications">
            <NavigationBar></NavigationBar>
            <Container className='d-flex align-center justify-content-center bg-light'>
                <Image src={landingPageImage} fluid className='mt-2'/>
            </Container>
            <Container className='d-flex align-center justify-content-center bg-light mt-2'>
                <h4>Performance Modifications</h4>
            </Container>
            <Container className='d-flex mt-3'>
                <p>
                Performance modifications refer to the process of enhancing and improving a vehicle's performance characteristics beyond its original factory specifications. It involves making modifications or upgrades to various components and systems of the vehicle with the goal of achieving better acceleration, speed, handling, and overall driving dynamics.
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
                            <th>Additional Info.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Consultation
                            </td>
                            <td>
                                We can take a look at your perfromance goals and suggest a plan to achieving them
                            </td>
                            <td>
                                1 hour
                            </td>
                            <td>
                                $150
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Cold Air Intake Install
                            </td>
                            <td>
                                Installation of an improved intake system to help air flow
                            </td>
                            <td>
                                1 hour
                            </td>
                            <td>
                                $150
                            </td>
                            <td>
                                Cold air intakes can be ordered by us for an additional cost
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Exhaust Part Installation
                            </td>
                            <td>
                                Installation of pre-fab exhaust componets
                            </td>
                            <td>
                                Variable
                            </td>
                            <td>
                                $180/hour
                            </td>
                            <td>
                                Installation of exhaust components can take from 4 to 10 hours depending on the vehicle and component<br/>
                                A more accurate estimate can be provided with more information
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Custom Exhaust Work
                            </td>
                            <td>
                                Design and fabrication of custom exhaust components to meet your specifications
                            </td>
                            <td>
                                Variable
                            </td>
                            <td>
                                $250/hour
                            </td>
                            <td>
                                Design and fabrication of exhaust components can take from 4 to 10 hours depending on the vehicle and components desired<br/>
                                A more accurate estimate can be provided with more information
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Engine Work
                            </td>
                            <td>
                                Upgrades of engine components
                            </td>
                            <td>
                                Variable
                            </td>
                            <td>
                                $400/hour
                            </td>
                            <td>
                                A more accurate estimate can be provided with more information
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
                    <Card.Img variant="top" src={mech6} />
                    <Card.Body>
                        <Card.Title className='text-center'>Sally</Card.Title>
                        <Card.Text>
                        Sally has been a mechanic for 12 years and specializes in custom fabrication work.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem' , height: "500px", margin: 5}}>
                    <Card.Img variant="top" src={mech2} />
                    <Card.Body>
                    <Card.Title className='text-center'>Rob</Card.Title>
                    <Card.Text>
                        Rob has been a mechanic for 10
                        years and specializes in domestic
                        vehicles and custom fabrication
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem' , height: "500px", margin: 5}}>
                    <Card.Img variant="top" src={mech1}/>
                    <Card.Body>
                    <Card.Title className='text-center'>John</Card.Title>
                    <Card.Text>
                        John has been a mechanic for 15 
                        years and specializes in all types of
                        exotic or import vehicles.
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
                                                <option>John</option>
                                                <option>Sally</option>
                                                <option>Rob</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className='mb-3' controlId='formSelection'>
                                            <Form.Label>Service</Form.Label>
                                            <Form.Select>
                                                <option selected>Select a service</option>
                                                <option>Consultation</option>
                                                <option>Intake Install</option>
                                                <option>Exhaust Part Installation</option>
                                                <option>Custom Exhaust Work</option>
                                                <option>Engine Work</option>
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

export default PerformanceModifications;