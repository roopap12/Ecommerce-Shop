import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/components/styles/main.css';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetail';
import Cart from './components/ShoppingCart';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import RegisterForm from './components/RegisterForm';
import UserProfile from './components/UserProfile';
import ShoppingCart from './components/ShoppingCart';
import CustomerSettings from './components/CustomerSettings';
import Footer1 from './components/Footer';
import SuccessPage from './SuccessPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productsgrid" element={<ProductGrid />} />
        <Route path="/products" element={<ProductList />} />
        {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/profile" element={<UserProfile />} />
        {/* <Route path="/settings" element={<CustomerSettings />} /> */}
      </Routes>
      <Footer1 />
    </Router>
  );
};

export default App;