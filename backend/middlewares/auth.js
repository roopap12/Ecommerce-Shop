const jwt = require('jsonwebtoken');
const { User } = require('./models/User'); // Import the User model
const { Order } = require('./models/Order'); // Import the Order model
const { Product } = require('../models/Product'); // Import the Product model

const secretKey = process.env.MY_APP_SECRET_KEY;

// Middleware to authenticate a user
function authenticateUser(req, res, next) {
  // Get the JWT token from the request header
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    // Verify and decode the JWT token
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

// Middleware to authorize user roles (if necessary)
function authorizeUserRoles(roles) {
  return async (req, res, next) => {
    const userId = req.user.id;

    try {
      // Find the user by ID
      const user = await User.findById(userId);

      if (!user || !roles.includes(user.role)) {
        return res.status(403).json({ message: 'Forbidden: User lacks required role' });
      }

      next();
    } catch (error) {
      return res.status(500).json({ message: 'Authorization failed', error: error.message });
    }
  };
}

// Middleware to authenticate an order (if necessary)
function authenticateOrder(req, res, next) {
  // Check if the order belongs to the authenticated user
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
function authenticateProduct(req, res, next) {
    // Check if the product belongs to the authenticated user (for example, based on the user's role)
    const productId = req.params.id;
    const userId = req.user.id;
  
    Product.findById(productId, (err, product) => {
      if (err) {
        return res.status(500).json({ message: 'Authentication failed', error: err.message });
      }
  
      if (!product || (product.user && product.user.toString() !== userId)) {
        return res.status(403).json({ message: 'Forbidden: Product does not belong to the user' });
      }
  
      next();
    });
  }
  
  module.exports = {
    authenticateUser,
    authorizeUserRoles,
    authenticateOrder,
    authenticateProduct,
  };