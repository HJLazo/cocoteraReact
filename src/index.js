import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './components/home/home';
import Features from './components/features';
import Products from './components/products';
import Product from './components/product';
import { RouterProvider, createBrowserRouter, Routes, Route, Router, Outlet } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/features',
        element: <Features />,
      },
      {
        path: '/products',
        element: <Products />,
        children: [
          {
            path: '/products/:productId',
            element: <Product />,
          }
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
  </React.StrictMode>
);

