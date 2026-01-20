import React from 'react';
import "./css/App.css";
import { BrowserRouter, Route, Routes } from 'react-router';
import FrontendLayout from './layout/FrontendLayout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FrontendLayout/>} >
        <Route path='/' element={<HomePage/>} />
        <Route path="/shop" element={<ShopPage/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;