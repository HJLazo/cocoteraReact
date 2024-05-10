import React from "react";
// import { useCart } from './cart/cartProvider'; // Make sure the path is correct
import { useLoaderData, useNavigate } from "react-router-dom";
import { useInformation } from './parent_information/infoProvider'; // Make sure the path is correct

const Product = () => {
  const { selectedProduct } = useLoaderData();
  const { addToCart } = useInformation();
  const navigate = useNavigate(); 

  const handleAddToCart = () => {
    addToCart(selectedProduct);  
    navigate("/cart");
    selectedProduct.addQuantity(1);
  };

  return (
    <div className="card bg-light" style={{ width: '18rem' }}>
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
