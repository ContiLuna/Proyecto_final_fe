import React, { Component, useState } from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";


function NavBar() {
  const [NavExpanded, setNavExpanded] = useState(false);
    return (
      <Navbar expanded={NavExpanded} expand="sm" sticky="top" className='Navbcss'>
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
            <img src="https://i.ibb.co/x27ShPx/Ok-food-191919.png" alt="Logo" width={'50px'} className='mx-auto mx-sm-1 mx-xl-3 mx-xxl-5'/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle onClick={()=> setNavExpanded(!NavExpanded)} aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav onClick={()=> setNavExpanded(false)} 
              className='container gap-1 mx-1 mx-sm-auto mx-xxl-7 flex-column flex-sm-row justify-content-center justify-content-sm-end'>
                <Nav.Link as={Link} to='/' className='d-inline-flex justify-content-center'
                >Home</Nav.Link>
                <Nav.Link as={Link} to='/pedidos' className='d-inline-flex justify-content-center'
                >Pedidos</Nav.Link>
                <Link to='/login'>
                  <Button type='button' 
                  className='btn btn-dark container gap-1 flex-column flex-sm-row justify-content-center justify-content-sm-end'>Ingresar</Button>
                </Link>
                <Link to='/login'>
                  <Button type='button' 
                  className='btn btn-dark container gap-1 flex-column flex-sm-row justify-content-center justify-content-sm-end'>Registro</Button>
                </Link>
                {/* <Link to='/login'>
                  <Button type='button' 
                  className='btn btn-dark container gap-1 flex-column flex-sm-row justify-content-center justify-content-sm-end'>Cerrar Sesión</Button>
                </Link> */}
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;
