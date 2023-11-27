// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const connectDB = require('./db'); // Assuming db.js is in the same directory
// const productsRouter = require('./routes/products');

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Enable CORS for all routes
// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

// // Add these lines for handling CORS headers
// app.options('*', cors()); // Enable preflight for all routes
// app.use((req, res, next) => {
//   console.log('CORS middleware executed');
//   // Set CORS headers
//   res.header('Access-Control-Allow-Headers', '*');
//   res.header('Access-Control-Allow-Methods', '*');
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header('Access-Control-Allow-Credentials', true);

//   // Continue to the next middleware
//   next();
// });

// // Connect to MongoDB
// connectDB();

// console.log('Before connecting to MongoDB'); // Add this line for debugging

// // Middleware
// app.use(express.json());

// // Routes
// app.use('/api/products', productsRouter);

// // Add any other routes or middleware as needed

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// console.log('After connecting to MongoDB'); // Add this line for debugging