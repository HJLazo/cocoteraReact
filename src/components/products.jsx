import React, {useState} from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import ProductCollection from "../utils/productCollection";

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex gap-5 m-5">
      <div className="">
        { ProductCollection.map((product) => (
          <div key={product.id} className="card" style={{ width: '18rem' }}>
            <NavLink
            to={`/products/${product.id}`}
            className={({isActive}) => { return isActive ? 'nav-link disabled' : 'nav-link'}}
            >
              {product.name}
            </NavLink>
          </div>
              ))
        }
          <div>
        </div>
      </div>
      <Outlet context={ProductCollection} />
    </div>
  );
}

export default Products;