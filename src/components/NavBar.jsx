import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    return (
      <Navbar collapseOnSelect bg="dark" variant={"dark"} expand="md" sticky="top" >
        <Container fluid>
          <Navbar.Brand className='' href="#">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-center text-md-start" style={{ maxHeight: '100%' }}>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Pedidos</Nav.Link>
              <Nav.Link href="#action3">Nosotros</Nav.Link>
              <Nav.Link href="#action4">Contacto</Nav.Link>
            </Nav>
            <Form className="d-flex mt-1">
              <Form.Control
                type="search"
                placeholder="Buscar Producto"
                className="me-1"
                aria-label="Search"
              />
              <Button variant="outline-success"
              className="me-1">Search</Button>
            </Form>
            <div className='mt-1 d-grid d-md-flex justify-content-center flex-md-row flex-sm-column' role="group">
            <Button variant="outline-danger"
            className="me-1 text-center">Login</Button>
            <Button variant="outline-danger"
            className="me-1 text-center">Register</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;
