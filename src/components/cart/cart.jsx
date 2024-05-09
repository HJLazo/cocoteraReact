import React from "react";
import { useCart } from "./cartProvider"; // Adjust the path as necessary

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.description} - ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
