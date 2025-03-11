import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/foodlogo.png';
import './Navbar.css';

const NavigationBar1 = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbar-nav" />
        
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/Schedule">Schedule</Nav.Link>
            <Nav.Link as={Link} to="/Team">Team</Nav.Link>

            <NavDropdown title="Pages" id="pagesDropdown">
              <NavDropdown.Item as={Link} to="/FAQ">FAQ</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/404">404 Page</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Blog" id="blogDropdown">
              <NavDropdown.Item as={Link} to="/Blog">Blog</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/BlogSingle">Single Page</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar1;
