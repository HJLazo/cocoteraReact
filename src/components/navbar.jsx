import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from './cart/cartProvider'; 

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
  },{
    text: "Cart",
    to: "/cart",
    total: 0,
  }

]

const Navbar = () => {
  const { totalProducts } = useCart();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <ul className="navbar-nav mr-auto">
        {links.map((link, index) => (
            <li key={index}>
            <NavLink
            className="nav-link"
             to={link.to} >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;