// const express = require('express');
// const connectDB = require('./server');
// const User = require('./models/user.js');
// const userRouter = require('./routes/users.js');
// const testTokenRoute = require('./routes/test-token-verification.js');
// const app = express();
// const dotenv = require('dotenv');
// dotenv.config();

// console.log('MongoDB Connection String:', process.env.MONGODB_URI);

// connectDB();

// // Middleware for parsing JSON requests
// app.use(express.json());

// // Logging middleware to inspect incoming requests
// app.use((req, res, next) => {
//   console.log(req.body); // Log the request body
//   next();
// });

// app.use('/user', userRouter);
// app.use('/', testTokenRoute);

// app.get('/', async (req, res) => {
//   try {
//     let dbResult = await User.find({});
//     if (dbResult) {
//       console.log(dbResult);
//       res.json(dbResult);
//     } else {
//       res.status(500).json({ error: 'Error fetching users' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.listen(3001, () => {
//   console.log('Server started on port 3001');
// });

const express = require('express');
const connectDB = require('./server');
const User = require('./models/user.js');
const ProductRouter = require('./routes/products.js'); // Import product routes
const userRouter = require('./routes/users.js');
const orderRouter = require('./routes/orders.js');
const testTokenRoute = require('./routes/test-token-verification.js');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

console.log('MongoDB Connection String:', process.env.MONGODB_URI);

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

