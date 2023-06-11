import logo from '../../resources/shared/logo.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
    return (
      <>
        <Navbar bg="white" expand="lg">
          <Container>
            <Navbar.Brand href='/'>
              <img
                src={logo}
                height='40'
                className='d-inline-block align-top'
                alt='Pitstop Perf '
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Item>
                  <Nav.Link href='/'>Home</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item href='/regularMaintenance'>Regular Maintenance</NavDropdown.Item>
                  <NavDropdown.Item href='/performanceModifications'>Performance Modifications</NavDropdown.Item>
                  <NavDropdown.Item href="/tuning">Tuning</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}


export default NavigationBar;