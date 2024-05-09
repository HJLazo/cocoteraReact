import React from "react";
import { useParams, useOutletContext, useLoaderData } from "react-router-dom";

const Product = () => {
  const {selectedProduct} = useLoaderData();
  return (
    <div className="card" style={{ width: '18rem' }}> 
      <img src={selectedProduct.url} alt="Selected Product" />
      <div className="card-body">
        <h5>{selectedProduct.name}</h5>
        <p>{selectedProduct.description}</p>
      </div>
    </div>
  );
}

export default Product;