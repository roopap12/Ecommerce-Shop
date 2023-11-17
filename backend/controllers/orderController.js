const Order = require('../models/order');

// Controller function to create a new order
exports.createOrder = async (req, res) => {
  console.log('User:', req.user);
  try {
    const { user, products, totalAmount, shippingAddress } = req.body;

    // Validate input (e.g., check for required fields)
    if (!user || !products || products.length === 0 || !totalAmount || !shippingAddress) {
      return res.status(400).json({ message: 'Invalid order data' });
    }

    // Create a new order
    const newOrder = new Order({
      user,
      products,
      totalAmount,
      shippingAddress,
    });

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Order creation failed', error: error.message });
  }
};

// Controller function to retrieve all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving orders', error: error.message });
  }
};

// Controller function to retrieve a single order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving order', error: error.message });
  }
};

// Controller function to update an order by ID
exports.updateOrder = async (req, res) => {
  try {
    const { user, products, totalAmount, shippingAddress, status } = req.body;

    // Validate input (e.g., check for required fields)
    if (!user || !products || products.length === 0 || !totalAmount || !shippingAddress || !status) {
      return res.status(400).json({ message: 'Invalid order data' });
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        user,
        products,
        totalAmount,
        shippingAddress,
        status,
      },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating order', error: error.message });
  }
};

// Controller function to delete an order by ID
exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndRemove(req.params.id);

    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting order', error: error.message });
  }
};