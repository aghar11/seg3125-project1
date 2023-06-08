import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import landingPageImage from './resources/homepage/landingPageImage.jpg';
import NavigationBar from './components/shared/NavigationBar';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

import regMaintenanceImage from './resources/homepage/regMaintenance.jpg'
import perfModsImage from './resources/homepage/perfMods.jpg'
import tuningImage from './resources/homepage/tuning.jpg'

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
                  <div className='text-center'>
                    <Button variant="dark">Learn More</Button>
                  </div>
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
      </header>
    </div>
  );
}

export default App;
