import React, { useState } from "react";
import { useCart } from "./cartProvider";
import Table from "./table";

const Cart = () => {
  const { cartItems, removeFromCart, addProductQuantity, removeProductQuantity } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <Table products={cartItems}
         removeFromCart={removeFromCart} 
         addProductQuantity={addProductQuantity}
         removeProductQuantity={removeProductQuantity}
         />
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
