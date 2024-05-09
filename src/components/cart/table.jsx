import React from "react";

const Table = ({ products, removeFromCart, addProductQuantity, removeProductQuantity }) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio</th>
          <th scope="col">Total</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>
              <button onClick={() => removeProductQuantity(product.id)}>-</button>
              <input type="number" value={product.quantity} readOnly />
              <button onClick={() => addProductQuantity(product.id)}>+</button>
            </td>
            <td>{product.price.toFixed(2)}</td>
            <td>{(product.price * product.quantity).toFixed(2)}</td>
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
