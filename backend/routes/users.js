const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const authMiddleware = require('../middlewares/auth');

// User registration route
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, dateOfBirth, profilePicture } = req.body;

    // Validate input (e.g., check for required fields)
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please provide all required information.' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email.' });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      dateOfBirth, // Save the DOB if provided
      profilePicture, // Save the profile picture if provided
    });

    const savedUser = await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
});

// User authentication route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log('Login attempt with email:', email);
    console.log('Login attempt with password:', password);

    // Validate input (e.g., check for required fields)
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide both email and password.' });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    console.log('User found in the database:', user);

    // Check if the user exists
    if (!user) {
      console.log('User not found in the database.');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Verify the password
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log('Password match:', passwordMatch);

    if (passwordMatch) {
      console.log(`User ${email} successfully authenticated.`);
      // Password is correct; generate a JWT token
      const token = jwt.sign({ id: user._id }, process.env.MY_APP_SECRET_KEY, { expiresIn: '1h' });
      console.log('Generated token:', token);

      //decode token before verification
      const decodedToken = jwt.decode(token);
      // const decodedToken = jwt.verify(token, process.env.MY_APP_SECRET_KEY);
      console.log('Decoded Token:', decodedToken);

      res.status(200).json({ token });
    } else {
      console.log(`Authentication failed for user ${email}. Incorrect password.`);
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Authentication failed', error: error.message });
  }
});

// Sample authenticated route (e.g., profile page)
router.get('/profile', authMiddleware.authenticateUser, (req, res) => {
  // You can access the authenticated user's data using req.user
  res.json({ user: req.user });
});

module.exports = router;