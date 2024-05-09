import React from "react";
import { RouterProvider, Outlet, createBrowserRouter, Routes, Route, Router } from "react-router-dom";
import { CartProvider } from "./components/cart/cartProvider";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
// import '../src/assets/style/app/app.css';

const App = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <CartProvider>
        <div className="d-flex flex-column flex-grow-1" >
            <Navbar />
            <div className="d-flex flex-grow-1">
              <Outlet />
            </div>
            <Footer />
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
