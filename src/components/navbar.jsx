import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from './cart/cartProvider'; 

const links = [
  {
    text: "Home",
    to: "/",
    totalProducts: false
  },
  {
    text: "Features",
    to: "/features",
    totalProducts: false
  },
  {
    text: "Products",
    to: "/products",
    totalProducts: false
  },{
    text: "Cart",
    to: "/cart",
    totalProducts: true
  }
]

const Navbar = () => {
  const { cartItems } = useCart();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <ul className="navbar-nav mr-auto">
        { links.map((link, index) => (
          link.totalProducts ?
          <li key={index} className="nav-item">
            <NavLink className="nav-link" to={link.to}>
              {link.text}
                <span className="px-1">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
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
    </nav>
  );
}

export default Navbar;