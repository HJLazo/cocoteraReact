import React, {useState} from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import photo1 from '../assets/imgs/coleccion/foto1.jpeg';
import photo2 from '../assets/imgs/coleccion/foto2.jpeg';
import photo3 from '../assets/imgs/coleccion/foto3.jpeg';

const Products = () => {
  const [product, setProduct] = useState('');
  // const collection = [photo1,photo2,photo3]
  const collection = [1,2,3,4,5]



  return (
    <div className="d-flex">
      <div className="">
        { collection.map((index) => (
          <div key={index} className="card" style={{ width: '18rem' }}>
            <NavLink key={index} 
            to={`/products/${index}`}
            className={({isActive}) => { return isActive ? 'nav-link disabled' : 'nav-link'}}
            >
              Foto {index}
            </NavLink>
          </div>
              ))
              }
      <div>
        <Outlet />
      </div>
      </div>
    </div>
  );
}

export default Products;