import logo from '../../resources/shared/logo.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
    return (
      <>
        <Navbar bg="white" expand="lg">
          <Container>
            <Navbar.Brand>
              <NavLink to="/">
                <img
                  src={logo}
                  height='40'
                  className='d-inline-block align-top'
                  alt='Pitstop Perf '
                />
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link>
                  <NavLink to='/'>Home</NavLink>
                </Nav.Link>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <NavLink to="/regularMaintenance">Regular Maintenance</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink to="/performanceModifications">Performance Modifications</NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink to="/tuning">Tuning</NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}


export default NavigationBar;