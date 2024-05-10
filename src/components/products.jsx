import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import ProductCollection from "../utils/productCollection";
import ListGroup from 'react-bootstrap/ListGroup';

const Products = () => {

  return (
    <div className="d-flex flex-grow-1">
      <div className="d-flex gap-5 m-5 products">
        <div>
        <h2>Catalogo de Temporada</h2>
          <ListGroup>
            { ProductCollection.map((product) => (
              <NavLink
                key={product.id}
                to={`/products/${product.id}`}
                className={({isActive}) => { return isActive ? 'nav-link disabled' : 'nav-link'}}
                style={{ width: '18rem' }}
              >
                <ListGroup.Item
                  variant='light'
                  action
                >
                    {product.name}
                </ListGroup.Item>
              </NavLink>
                  ))
            }
              <div>
            </div>
            </ListGroup>
          </div>
          <Outlet context={ProductCollection} />
      </div>
    </div>
  );
}

export default Products;