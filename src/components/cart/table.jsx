import React from "react";

const Table = ({ products, removeFromCart, addProductQuantity, removeProductQuantity }) => {

  return (
    <table className="table">
      <thead>
        <tr>
        <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio Regular</th>
          <th scope="col">Descuento</th>
          <th scope="col">Precio con Descuento</th>
          <th scope="col">Total</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product.id}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td className="d-flex">
              <button className="btn btn-primary" onClick={() => removeProductQuantity(product.id)}>-</button>
              <input className="form-control mx-2 text-center" 
              type="number" 
              value={product.quantity} 
              style={{ width: '60px' }}
              readOnly />
              <button className="btn btn-primary" onClick={() => addProductQuantity(product.id)}>+</button>
            </td>
            <td>{product.price.toFixed(2)}</td>
            <td>{product.discount}</td>
            <td>{product.discountPrice}</td>
            <td>{(product.discountPrice * product.quantity).toFixed(2)}</td>
            <td>
              <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
