const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { authenticateToken } = require('../middlewares/auth'); // Import the authentication middleware

// Create a new order
router.post('/create', authenticateToken, orderController.createOrder);

// Get a list of all orders
router.get('/', authenticateToken, orderController.getOrders);

// Get a single order by ID
router.get('/:id', authenticateToken, orderController.getOrderById);

// Update an existing order
router.put('/update/:id', authenticateToken, orderController.updateOrder);

// Delete an order by its ID
router.delete('/:id', authenticateToken, orderController.deleteOrder);

module.exports = router;