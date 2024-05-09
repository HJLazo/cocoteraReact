import React from "react";
import { RouterProvider, Outlet, createBrowserRouter, Routes, Route, Router } from "react-router-dom";
import { CartProvider } from "./components/cart/cartProvider";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Outlet />
      </CartProvider>

      <Footer />
    </div>
  );
}

export default App;
