const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/user');
const Order = require('../models/order');
const Product = require('../models/products');

const secretKey = process.env.MY_APP_SECRET_KEY;

// Middleware to authenticate a user
function authenticateUser(req, res, next) {
  // Add CORS headers for this middleware
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);
  // console.log("req",req)
  // console.log("secret key",secretKey)

  // const token = req.header('Authorization-Bearer');
  const token = req.header('Authorization');
  // console.log('Token from header:', token);

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    console.log('Decoded Token:', decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(401).json({ message: 'Invalid token' });
  }
}

function authorizeUserRoles(roles) {
  return (req, res, next) => {
    const userId = req.user.id;

    // Find the user by ID
    User.findById(userId)
      .then(user => {
        console.log('User:', user);
        console.log('User role:', user.role);
        if (!user || !roles.includes(user.role)) {
          return res.status(403).json({ message: 'Forbidden: User lacks required role' });
        }

        next();
      })
      .catch(error => {
        return res.status(500).json({ message: 'Authorization failed',
error: error.message });
      });
  };
}

// Middleware to authenticate an order (if necessary)
function authenticateOrder(req, res, next) {
  const orderId = req.params.id;
  const userId = req.user.id;

  Order.findById(orderId, (err, order) => {
    if (err) {
      return res.status(500).json({ message: 'Authentication failed', error: err.message });
    }

    if (!order || order.user.toString() !== userId) {
      return res.status(403).json({ message: 'Forbidden: Order does not belong to the user' });
    }

    next();
  });
}

// Middleware to authenticate a product (if necessary)

async function authenticateProduct(req, res, next) {
  const productId = req.params.id;
  const userId = req.user.id;

  try {
    const product = await Product.findById(productId).exec();

    if (!product || (product.user && product.user.toString() !== userId)) {
      return res.status(403).json({ message: 'Forbidden: Product does not belong to the user' });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Authentication failed', error:
error.message });
  }
}

module.exports = {
  authenticateUser,
  authorizeUserRoles,
  authenticateOrder,
  authenticateProduct,
};