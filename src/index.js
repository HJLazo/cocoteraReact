import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './components/home/home';
import Features from './components/features';
import Products from './components/products';
import Product from './components/product';
import { RouterProvider, createBrowserRouter, Routes, Route, Router, Outlet } from "react-router-dom";
import ProductCollection from './utils/productCollection';
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
            loader: ({ params }) => {
              const selectedProduct = ProductCollection.find((product) => product.id === parseInt(params.productId));
              return { selectedProduct }
            }
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

