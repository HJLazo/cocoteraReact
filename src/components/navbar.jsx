import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    text: "Home",
    to: "/"
  },
  {
    text: "Features",
    to: "/features"
  },
  {
    text: "Products",
    to: "/products"
  }
]

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <ul className="navbar-nav mr-auto">
        {links.map((link, index) => (
            <li>
            <NavLink
            className="nav-link"
            key={index} to={link.to} >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;