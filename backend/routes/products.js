const express = require('express');
const router = express.Router();
const Product = require('../models/products'); // Import the Product model
const {
  authenticateUser,
  authorizeUserRoles,
  authenticateProduct,
} = require('../middlewares/auth');

// Create a new product
router.post('/create', authenticateUser, authorizeUserRoles(['admin']), async (req, res) => {
   // Add CORS headers for this route
   res.header('Access-Control-Allow-Headers', '*');
   res.header('Access-Control-Allow-Methods', '*');
   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
   res.header('Access-Control-Allow-Credentials', true);
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
      user: req.user.id, // Assign the product to the authenticated user
    });

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Product creation failed', error: error.message });
  }
});


router.get('/', async (req, res) => {
  console.log("Fetching all Products....")
  console.log("Query: ", req.query.category);

  try {
    let products = [];

    // Check if a category parameter is provided
    if (req.query.category) {
      // Use the category parameter to filter products
      products = await Product.find({ category: req.query.category });
      console.log("product categories: ", products);
    } else {
      // If no category parameter, get all products
      products = await Product.find();
      console.log("all products: ", products);
    }

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving products', error: error.message });
  }
});

//get all products in a particular category
router.get('/category/:category', async (req, res) => {
  try {
    const productsWithCategories = await Product.aggregate([
      {
        $group: {
          _id: '$category',
          products: { $push: '$$ROOT' },
        },
      },
    ]);


    res.status(200).json(productsWithCategories);

   
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving products', error: error.message });
  }
})

router.get('/uniquecategories', async (req, res) => {
  console.log("Fetching unique categories....")
  try {
    const categories = await Product.distinct('category');
    res.json(categories);
  } catch (error) {
    console.error('Error fetching unique categories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/uniquecategories', async (req, res) => {
  console.log("Fetching unique categories....")
  try {
    const categories = await Product.distinct('category');
    res.json(categories);
  } catch (error) {
    console.error('Error fetching unique categories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a single product by ID
router.get('/:id', async (req, res) => {
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
});

// Update an existing product
router.put('/update/:id', authenticateUser, authenticateProduct, authorizeUserRoles(['admin']), async (req, res) => {
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
});

// Delete a product by its ID
router.delete('/:id', authenticateUser, authenticateProduct, authorizeUserRoles(['admin']), async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndRemove(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
});

router.get('/products', async (req, res) => {
  try {
    let products;

    // Check if a category parameter is provided
    if (req.query.category) {
      // Use the category parameter to filter products
      products = await Product.find({ category: req.query.category });
    } else {
      // If no category parameter, get all products
      products = await Product.find();
    }

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;