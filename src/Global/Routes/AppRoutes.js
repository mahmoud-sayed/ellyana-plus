import React from 'react';
import { Routes, Route } from 'react-router-dom';

//pages
import Home from './../../Pages/Home/Home';
import MainProductsPage from './../../Pages/MainProductsPage/MainProductsPage';
import SingleProductPage from './../../Pages/SingleProductPage/SingleProductPage';
import BasketPage from './../../Pages/BasketPage/BasketPage';
import Checkout from './../../Pages/CheckoutPage/Checkout';
import BlogPage from './../../Pages/BlogPage/BlogPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route index path='/ellyana-plus' element={<Home />} />
      <Route path='/products' element={<MainProductsPage />} >
        <Route path='/products/product' element={<SingleProductPage />} />
      </Route>
      <Route path='/basket' element={<BasketPage />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/blog' element={<BlogPage />} />
    </Routes>
  );
};

export default AppRoutes;