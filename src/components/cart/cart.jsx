import React, { useState } from "react";
import { useCart } from "./cartProvider";
import Table from "./table";

const Cart = () => {
  const { cartItems, removeFromCart, addProductQuantity, removeProductQuantity } = useCart();

  return (
    <div className="m-5">
      {cartItems.length > 0 ? (
        <Table products={cartItems}
         removeFromCart={removeFromCart} 
         addProductQuantity={addProductQuantity}
         removeProductQuantity={removeProductQuantity}
         />
      ) : (
        <p>No tiene Productos</p>
      )}
    </div>
  );
};

export default Cart;
