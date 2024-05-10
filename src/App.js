import React from "react";
import { RouterProvider, Outlet, createBrowserRouter, Routes, Route, Router } from "react-router-dom";
import { CartProvider } from "./components/cart/cartProvider";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { UserProvider } from "./components/user/userProvider";

const App = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <UserProvider>
        <CartProvider>
          <div className="d-flex flex-column flex-grow-1" >
              <Navbar />
                <Outlet />
              <Footer />
          </div>
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
