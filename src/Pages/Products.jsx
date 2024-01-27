import React from 'react';
import { Route } from "react-router-dom"
import HomePage from './HomePage';
import { Routes } from 'react-router-dom';

const Products = () => {
  return (
    <>
    <Routes>
    <Route path="/Return Home" element={<HomePage />} />
    </Routes>

    <div>
      <h1>this is the Products Page</h1>
    </div>
    </>
  );
}

export default Products;
