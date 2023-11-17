import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/components/styles/main.css'
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetail';
import Cart from './components/ShoppingCart';
import Login from './components/users/Login';
import Register from './components/users/Register';
import Navbar from './components/Navbar';
import Footer1 from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer1 />
    </Router>
    
  );
}

export default App;
