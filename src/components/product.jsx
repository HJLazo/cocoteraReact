import React from "react";
import { useCart } from './cart/cartProvider'; // Make sure the path is correct
import { useLoaderData, useNavigate } from "react-router-dom";

const Product = () => {
  const { selectedProduct } = useLoaderData();
  const { addToCart } = useCart();
  const navigate = useNavigate(); 

  const handleAddToCart = () => {
    addToCart(selectedProduct);  
    navigate("/cart");
    selectedProduct.addQuantity(1);
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={selectedProduct.url} alt="Selected Product" />
      <div className="card-body">
        <h5>{selectedProduct.name}</h5>
        <p>{selectedProduct.description}</p>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Product;
