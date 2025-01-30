import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBarr() {
  return (
    <Navbar expand="lg" className="nav-bar">
      <Container fluid>
        <Navbar.Brand href="#action1"><img id='logo' src='/assets/controller-icon.png' style={{ width:'70px',height:'60px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Genres" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action...">FPS</NavDropdown.Item>
              <NavDropdown.Item href="#action...">RPG</NavDropdown.Item>
              <NavDropdown.Item href="#action...">TPS</NavDropdown.Item>
              <NavDropdown.Item href="#action...">Strategy</NavDropdown.Item>
              <NavDropdown.Item href="#action...">RTS</NavDropdown.Item>
            </NavDropdown>



            <NavDropdown title="Consoles" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">PS</NavDropdown.Item>
              <NavDropdown.Item href="#action...">Xbox</NavDropdown.Item>
              <NavDropdown.Item href="#action...">Nintendo</NavDropdown.Item>
              <NavDropdown.Item href="#action...">Wii</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action...">PC</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action..."><Link to="/about">About us</Link></Nav.Link>
            <Nav.Link href="#action..."><Link to="/contact">Contact</Link></Nav.Link>
            <Nav.Link href="#" disabled>Link</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Look for something ?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarr


