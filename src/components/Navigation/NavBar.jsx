// import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const token = localStorage.getItem("token");
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("prePedido");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <Navbar collapseOnSelect expand="sm" sticky="top" className="Navbcss">
      <Container fluid className="container-nav">
        <Link to="/">
          <Navbar.Brand>
            <img
              src="https://i.ibb.co/x27ShPx/Ok-food-191919.png"
              alt="Logo"
              width={"50px"}
            />
          </Navbar.Brand>
        </Link>
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
           
            <Link to='/nosotros' className="">
            <Nav.Link
                href="/nosotros"
                className="d-inline-flex justify-content-center"
              >
                ¿Quienes somos?
              </Nav.Link>
            </Link>
            {user.rol !== "admin" ? (
              ""
            ) : (
              <NavDropdown title="Adminstrador" id="basic-nav-dropdown" className="dropdown-admin">
                <Link to="/admin">
                  <NavDropdown.Item href="#action/3.1" className="btn-admin">Admin</NavDropdown.Item>
                </Link>
                <Link to="/admin/menus">
                  <NavDropdown.Item href="#action/3.2" className="btn-menu" >Menus</NavDropdown.Item>
                </Link>
              </NavDropdown>
            )}
            <Link to="/pedidos">
              {localStorage.getItem('user') ? (
                <Nav.Link
                  href="#action2"
                  className="d-inline-flex justify-content-center btn-pedidos"
                >
                  Pedidos
                </Nav.Link>
              ) : null}
            </Link>
            {token ? (
              <Button onClick={logOut} type="button" className="btn btn-cs">
                Cerrar Sesión
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => navigate("/login")}
                  type="button"
                  className="btn-log"
                >
                  Ingresar
                </Button>
                <Button
                  onClick={() => navigate("/registro")}
                  type="button"
                  className="btn-regist"
                >
                  Registro
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
