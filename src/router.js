import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/home';
import About from './screens/about';
import Dashboard from './screens/dashboard';
import ShoppingPage from './screens/shopping';

const Routing = () => {
  return (
      <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/shoppingPage" element={<ShoppingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
      </Routes>
  );
}

export default Routing;
