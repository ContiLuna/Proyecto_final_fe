import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="sm" sticky="top" className="Navbcss">
      <Container fluid>
        <Navbar.Brand className="" href="#">
          <img
            src="https://i.ibb.co/x27ShPx/Ok-food-191919.png"
            alt="Logo"
            width={"50px"}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="container gap-1 flex-column flex-sm-row justify-content-center justify-content-sm-end"
            style={{ maxHeight: "100%" }}
          >
            <Link to="/">
              <Nav.Link
                href="#action1"
                className="d-inline-flex justify-content-center"
              >
                Home
              </Nav.Link>
            </Link>
            <Link to="/pedidos">
              <Nav.Link
                href="#action2"
                className="d-inline-flex justify-content-center"
              >
                Pedidos
              </Nav.Link>
            </Link>
            <NavDropdown title="Adminstrador" id="basic-nav-dropdown">
              <Link to="/admin">
                <NavDropdown.Item href="#action/3.1">Admin</NavDropdown.Item>
              </Link>
              <Link to="/admin/menus">
                <NavDropdown.Item href="#action/3.2">Menus</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Desconectarse
              </NavDropdown.Item>
            </NavDropdown>
            <Button type="button" className="btn btn-dark">
              Ingresar
            </Button>
            <Button type="button" className="btn btn-dark">
              Registro
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
