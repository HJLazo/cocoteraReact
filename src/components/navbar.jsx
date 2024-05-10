import React from "react";
import { NavLink } from "react-router-dom";
import { useInformation } from "./parent_information/infoProvider";
import AuthForm from '../components/user/authForm';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const home = {
    text: "Home",
    to: "/",
  }

const products = {
    text: "Productos",
    to: "/products",
  }

const cart ={
    text: "Carrito de compras",
    to: "/cart",
  }


const about ={
  text: "About Us",
  to: "/about",
}

const Navigation = () => {
  const { totalProducts, currentUser, logOut } = useInformation();
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
      <Navbar.Brand >
        <NavLink className="nav-link" to={home.to}>
          {home.text}
        </NavLink>


      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink className="nav-link" to={products.to}>
            {products.text}
          </NavLink>
          <NavLink  to={cart.to} className="nav-link">
            {cart.text}
          </NavLink>
          <NavLink  to={about.to} className="nav-link">
            {about.text}
          </NavLink>
        </Nav>

      </Navbar.Collapse>


        {/* <ul className="navbar-nav mr-auto">
          { links.map((link, index) => (
            link.totalProducts ?
            <li key={index} className="nav-item">
              <NavLink className="nav-link" to={link.to}>
                {link.text}
                  <span className="px-1">
                    {totalProducts}
                  </span>
                </NavLink>
            </li>
              :
            <li key={index} className="nav-item">
              <NavLink className="nav-link" to={link.to}>
                {link.text}
                </NavLink>
            </li>
          ))
          }
        </ul> */}
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {currentUser ? currentUser.name : "Registrate / Inicia sesion"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          { currentUser ? 
            <Dropdown.Item onClick={() => {logOut()}}>Cerrar sesion</Dropdown.Item>
            :
          <AuthForm/>
          }
        </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

export default Navigation;