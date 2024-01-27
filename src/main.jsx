import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import Products from "./Pages/Products.jsx";
import { RouterProvider } from 'react-router-dom';
import About from "./Pages/About.jsx"
import Link from "./Pages/Link.jsx"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="products" element={<Products />} />
      <Route path="about" element={<About />} />
      <Route path="link" element={<Link />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
