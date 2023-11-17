const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { authenticateUser } = require('../middlewares/auth'); // Import the authentication middleware

// Create a new order
router.post('/create', authenticateUser, orderController.createOrder);

// Get a list of all orders
router.get('/', authenticateUser, orderController.getOrders);

// Get a single order by ID
router.get('/:id', authenticateUser, orderController.getOrderById);

// Update an existing order
router.put('/update/:id', authenticateUser, orderController.updateOrder);

// Delete an order by its ID
router.delete('/:id', authenticateUser, orderController.deleteOrder);

module.exports = router;