import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import landingPageImage from './resources/homepage/landingPageImage.jpg';
import NavigationBar from './components/shared/NavigationBar';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

import regMaintenanceImage from './resources/homepage/regMaintenance.jpg';
import perfModsImage from './resources/homepage/perfMods.jpg';
import tuningImage from './resources/homepage/tuning.jpg';

import mech1 from './resources/homepage/mechanicPictures/Picture1.jpg';
import mech2 from './resources/homepage/mechanicPictures/Picture2.jpg';
import mech3 from './resources/homepage/mechanicPictures/Picture3.jpg';
import mech4 from './resources/homepage/mechanicPictures/Picture4.jpg';
import mech5 from './resources/homepage/mechanicPictures/Picture5.jpg';
import mech6 from './resources/homepage/mechanicPictures/Picture6.webp';

function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar></NavigationBar>
        <Container className='d-flex align-center justify-content-center bg-light'>
          <Image src={landingPageImage} fluid className='mt-2'/>
        </Container>
        <Container className='d-flex align-center justify-content-center bg-light mt-2'>
          <h4>Let's get you back on the road!</h4>
        </Container>
        <Container className='d-flex align-center justify-content-center mt-3'>
          <h5>Our Specialties</h5>
        </Container>
        <Container className='d-flex align-center justify-content-center container-fluid mt-2'>
          <Row>
            <Col>
              <Card style={{ width: '26rem', height: "430px" }}>
                <Card.Img variant="top" src={regMaintenanceImage} />
                <Card.Body>
                  <Card.Title className='text-center'>Regular Vehicle Maintenance</Card.Title>
                  <Card.Text>
                    Our factory trained technicians can help with all regular maintenance on all types of exotic or domestic cars, like oil changes, tire replacement, or brake changes.
                  </Card.Text>
                  <div className='text-center'>
                    <Button variant="dark">Learn More</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '26rem' , height: "430px" }}>
                <Card.Img variant="top" src={perfModsImage} />
                <Card.Body>
                  <Card.Title className='text-center'>Performance Modifications</Card.Title>
                  <Card.Text>
                    Our experienced and dedicated staff are eager
                    to tackle all of your performance goals whether
                    it's bolt on accessories or fully custom 
                    fabricated exhaust work.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '26rem', height: "430px" }}>
                <Card.Img variant="top" src={tuningImage} />
                <Card.Body>
                  <Card.Title className='text-center'>ECU Tuning and Support</Card.Title>
                  <Card.Text>
                    With our state of the art dyno machines 
                    and fully trained tuning specialists, we 
                    can build custom performance tunes to help
                    you get the most out of your vehicle.
                  </Card.Text>
                  <div className='text-center'>
                    <Button variant="dark">Learn More</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container className='d-flex align-center justify-content-center container-fluid mt-3 bg-light'>
          <h5 className='mt-2'>Meet our Team</h5>
        </Container>
        <Container className='d-flex align-center justify-content-center container-fluid bg-light'>
          <Carousel variant='dark'>
            <Carousel.Item>
              <Container className='d-flex align-center justify-content-center container-fluid mt-1'>
                
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
                  <Card.Img variant="top" src={mech3} />
                  <Card.Body>
                    <Card.Title className='text-center'>Mark</Card.Title>
                    <Card.Text>
                      Mark has been a tuner for 15 years and
                      handles all of our in house ECU tuning for all types of vehicles.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '22rem' , height: "500px", margin: 5}}>
                    <Card.Img variant="top" src={mech6} />
                    <Card.Body>
                      <Card.Title className='text-center'>Sally</Card.Title>
                      <Card.Text>
                        Sally has been a mechanic fro 12 years and specializes in custom fabrication work.
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
                      John has been a mechanic for 15 
                      years and specializes in tire installation and alignments.
                    </Card.Text>
                  </Card.Body>
                  </Card>
                  <Card style={{ width: '22rem' , height: "500px", margin: 5}}>
                    <Card.Img variant="top" src={mech5} />
                    <Card.Body>
                      <Card.Title className='text-center'>Nat</Card.Title>
                      <Card.Text>
                        Nat has been a mechanic for 16 years and specializes in all vehicle electronics.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Container>
            </Carousel.Item>
          </Carousel>
        </Container>
        <Container className='d-flex align-center justify-content-center container-fluid mt-5'>

        </Container>
      </header>
    </div>
  );
}

export default App;
