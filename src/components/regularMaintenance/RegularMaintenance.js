import NavigationBar from "../shared/NavigationBar";
import landingPageImage from "../../resources/regularMaintenance/maintenanceLandingPicture.jpg"
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
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
import mech4 from '../../resources/shared/mechanicPictures/Picture4.jpg';
import mech6 from '../../resources/shared/mechanicPictures/Picture6.webp';

function RegularMaintenance() {
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
        <div className="RegularMaintenance">
            <NavigationBar></NavigationBar>
            <Container className='d-flex align-center justify-content-center bg-light'>
                <Image src={landingPageImage} fluid className='mt-2'/>
            </Container>
            <Container className='d-flex align-center justify-content-center bg-light mt-2'>
                <h4>Regular Maintenance</h4>
            </Container>
            <Container className='d-flex mt-3'>
                <p>
                    Regular car maintenance refers to the routine care and upkeep necessary to ensure the optimal performance, reliability, and longevity of a vehicle. It involves a series of preventive measures and inspections carried out at specified intervals to identify and address any potential issues before they develop into major problems.
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
                                Investigative Consultation
                            </td>
                            <td>
                                We can take a look at any issues you are experiencing and determine the issue
                            </td>
                            <td>
                                Variable
                            </td>
                            <td>
                                $100/hour
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Tire Change
                            </td>
                            <td>
                                Removal of tires currently on vehichle and installation of other set of tires
                            </td>
                            <td>
                                30 minutes
                            </td>
                            <td>
                                $50
                            </td>
                            <td>
                                Tire rotation can also be done but must be specifically requested
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Tire Mounting and Balancing
                            </td>
                            <td>
                                Removal of tires from rims and installation of new tires on rims
                            </td>
                            <td>
                                1 hour
                            </td>
                            <td>
                                $100
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Alignment
                            </td>
                            <td>
                                Adjustment of suspension components to ensure best driving experience
                            </td>
                            <td>
                                ~2 hours
                            </td>
                            <td>
                                $200
                            </td>
                            <td>
                            
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Oil Change
                            </td>
                            <td>
                                Change of the engine oil to new oil based on manufacturer recommendation
                            </td>
                            <td>
                                1 hour
                            </td>
                            <td>
                                $200
                            </td>
                            <td>
                                Please specify your car so we can have the correct manufacturer recommended oil ready
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Spark Plugs Change
                            </td>
                            <td>
                                Change of the engine spark plugs
                            </td>
                            <td>
                                3 hours
                            </td>
                            <td>
                                $500
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Brake Pad Change
                            </td>
                            <td>
                                Change of the break pads
                            </td>
                            <td>
                                2 hour
                            </td>
                            <td>
                                $400
                            </td>
                            <td>
                                Please specify your car so we can have the correct manufacturer recommended brake pads ready
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Brake Rotor Change
                            </td>
                            <td>
                                Change of the break rotors
                            </td>
                            <td>
                                3 hour
                            </td>
                            <td>
                                $500
                            </td>
                            <td>
                                Please specify your car so we can have the correct manufacturer recommended brake rotors ready
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
                <Carousel variant='dark'>
                <Carousel.Item>
                    <Container className='d-flex align-center justify-content-center container-fluid mt-1'>
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
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container className='d-flex align-center justify-content-center container-fluid mt-1'>
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
                    <Card style={{ width: '22rem' , height: "500px", margin: 5}}>
                        <Card.Img variant="top" src={mech4} />
                        <Card.Body>
                        <Card.Title className='text-center'>Dave</Card.Title>
                        <Card.Text>
                            Dave has been a mechanic for 15 
                            years and specializes in tire installation and alignments.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Container>
                </Carousel.Item>
                </Carousel>
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
                                            <Form.Control type="name" placeholder='Enter name' required/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" required/>
                                            <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className='mb-3' controlId='formSelection'>
                                            <Form.Label>Specialists</Form.Label>
                                            <Form.Control required></Form.Control>
                                            <Form.Select>
                                                <option selected>Select a specialist</option>
                                                <option>John</option>
                                                <option>Dave</option>
                                                <option>Sally</option>
                                                <option>Rob</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className='mb-3' controlId='formSelection'>
                                            <Form.Label>Service</Form.Label>
                                            <Form.Control required></Form.Control>
                                            <Form.Select>
                                                <option selected>Select a service</option>
                                                <option>Consultation</option>
                                                <option>Tire Change</option>
                                                <option>Tire Mounting and Balancing</option>
                                                <option>Alignment</option>
                                                <option>Oil Change</option>
                                                <option>Spark Plug Change</option>
                                                <option>Brake Pad Change</option>
                                                <option>Brake Rotor Change</option>
                                                <option>Other</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className='mb-3' controlId='formSelection'>
                                            <Form.Label>Date</Form.Label>
                                            <Form.Control type="date" placeholder="Select date" required/>
                                        </Form.Group>

                                        <Form.Group className='mb-3' controlId='formSelection'>
                                            <Form.Label>Time</Form.Label>
                                            <Form.Control required></Form.Control>
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

export default RegularMaintenance;