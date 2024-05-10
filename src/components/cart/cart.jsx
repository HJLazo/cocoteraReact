import React, { useState } from "react";
import { useInformation } from '../parent_information/infoProvider';
import Table from "./table";

const Cart = () => {
  const { cartItems, currentUser, removeFromCart, addProductQuantity, removeProductQuantity } = useInformation();

  // useState(() => {
  //   if (currentUser && currentUser.cart) {
  //     setNewCart(currentUser.cart);
  //   }
  // } , [currentUser, cartItems]);

  return (
    <div className="d-flex flex-grow-1">
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
    </div>
  );
};

export default Cart;
