import React from "react";
import { NavLink } from "react-router-dom";
import { useInformation } from "./parent_information/infoProvider";
import AuthForm from '../components/user/authForm';
import Dropdown from 'react-bootstrap/Dropdown';

const links = [
  {
    text: "Home",
    to: "/",
    totalProducts: false
  },
  {
    text: "Productos",
    to: "/products",
    totalProducts: false
  },{
    text: "Carrito de compras",
    to: "/cart",
    totalProducts: true
  }
]

const Navbar = () => {
  const { totalProducts, currentUser, logOut } = useInformation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <ul className="navbar-nav mr-auto">
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
      </ul>
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
    </nav>
  );
}

export default Navbar;