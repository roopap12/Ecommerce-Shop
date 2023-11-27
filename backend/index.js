const express = require('express');
const connectDB = require('./db'); // Update the import
const User = require('./models/user.js');
const ProductRouter = require('./routes/products.js'); // Import product routes
const userRouter = require('./routes/users.js');
const orderRouter = require('./routes/orders.js');
const testTokenRoute = require('./routes/test-token-verification.js');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// Enable CORS for all routes
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

// Add these lines for handling CORS headers
app.options('*', cors()); // Enable preflight for all routes
app.use((req, res, next) => {
  console.log('CORS middleware executed');
  // Set CORS headers
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);

  // Continue to the next middleware
  next();
});

connectDB();

// Middleware for parsing JSON requests
app.use(express.json());

// Logging middleware to inspect incoming requests
app.use((req, res, next) => {
  console.log(req.body); // Log the request body
  next();
});

app.use('/user', userRouter);
app.use('/products', ProductRouter); // Use product routes
app.use('/', testTokenRoute);
app.use('/orders', orderRouter);

app.get('/', async (req, res) => {
  try {
    let dbResult = await User.find({});
    if (dbResult) {
      console.log(dbResult);
      res.json(dbResult);
    } else {
      res.status(500).json({ error: 'Error fetching users' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});

