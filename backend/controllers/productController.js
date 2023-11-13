const Product = require('../models/Product');

// Controller function to create a new product
const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, imageUrl, quantity, gender } = req.body;

    // Validate input (e.g., check for required fields)
    if (!name || !price) {
      return res.status(400).json({ message: 'Please provide product name and price.' });
    }

    // Create a new product
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      imageUrl,
      quantity,
      gender,
    });

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Product creation failed', error: error.message });
  }
};

// Controller function to retrieve all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving products', error: error.message });
  }
};

// Controller function to retrieve a single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving product', error: error.message });
  }
};

// Controller function to update a product by ID
const updateProduct = async (req, res) => {
  try {
    const { name, description, price, category, imageUrl, quantity, gender } = req.body;

    // Validate input (e.g., check for required fields)
    if (!name || !price) {
      return res.status(400).json({ message: 'Please provide product name and price.' });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        price,
        category,
        imageUrl,
        quantity,
        gender,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating product', error: error.message });
  }
};

// Controller function to delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndRemove(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};