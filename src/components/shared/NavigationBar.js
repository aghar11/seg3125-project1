import logo from '../../resources/shared/logo.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LinkContainer from 'react-router-bootstrap/LinkContainer';

function NavigationBar() {
    return (
      <>
        <Navbar bg="white" expand="lg">
          <Container>
            <Navbar.Brand>
              <LinkContainer to="/home">
                <img
                  src={logo}
                  height='40'
                  className='d-inline-block align-top'
                  alt='Pitstop Perf '
                />
              </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <LinkContainer to="/home">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <LinkContainer to="/regularMaintenance">
                    <NavDropdown.Item>Regular Maintenance</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/performanceModifications">
                    <NavDropdown.Item>Performance Modifications</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/tuning">
                    <NavDropdown.Item>Tuning</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}


export default NavigationBar;