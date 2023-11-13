const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
  },
  gender: {
    type: String, // You can use an enum to restrict values (e.g., 'male', 'female')
    required: true,
  },
  // You can add more fields as needed for your specific application
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;