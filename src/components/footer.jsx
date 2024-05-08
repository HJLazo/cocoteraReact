import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-5 bg-dark p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="text-white">Contacto</h5>
            <p className="text-white">Teléfono: 1234567890</p>
            <p className="text-white">Email: email@.com</p>
          </div>
          <div className="col-md-4">
            <h5 className="text-white">Redes Sociales</h5>
            <i className="fa-brands fa-instagram text-white px-2"></i>
            <i className="fa-brands fa-facebook text-white"></i>
          </div>
          <div className="col-md-4">
            <h5 className="text-white">Dirección</h5>
            <p className="text-white">Calle 123</p>
            <p className="text-white">Colonia 123</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
