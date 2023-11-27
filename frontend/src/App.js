import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import api from './services/api'; 
// import ProductDetail from './components/ProductDetail';
// import LoginForm from './components/LoginForm';
// import RegisterForm from './components/RegisterForm';
// import UserProfile from './components/UserProfile';
// import ShoppingCart from './components/ShoppingCart';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductGrid api={api} />} />
          {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
          {/* <Route path="/login" element={<LoginForm />} /> */}
          {/* <Route path="/register" element={<RegisterForm />} /> */}
          {/* <Route path="/profile" element={<UserProfile />} /> */}
          {/* <Route path="/cart" element={<ShoppingCart />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;