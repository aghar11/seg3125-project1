import logo from '../../resources/shared/logo.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
    return (
        <Navbar bg="white" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
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
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#contact">Contact Us</Nav.Link>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Regular Maintenance</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Performance Modifications
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">ECU Tuning and Support</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Meet Our Team
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default NavigationBar;