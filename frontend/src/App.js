import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/components/styles/main.css';
import Home from './components/Home';
// import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail'; // Corrected component name
// import Cart from './components/ShoppingCart';
import LoginForm from './components/LoginForm'; // You can remove this line if LoginForm is imported above
import RegisterForm from './components/RegisterForm'; // You can remove this line if RegisterForm is imported above
import Navbar from './components/Navbar';
// import Footer1 from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<ProductList />} /> */}
        <Route path="/products/:id" element={<ProductDetail />} /> {/* Corrected component name */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/registerForm" element={<RegisterForm />} />
      </Routes>
      {/* <Footer1 /> */}
    </Router>
  );
}

export default App;