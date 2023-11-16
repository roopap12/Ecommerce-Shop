const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { authenticateUser } = require('../middlewares/auth');

// This route requires authentication
router.get('/test-token-verification', authenticateUser, (req, res) => {
  res.json({ message: 'Token verification successful', user: req.user });
});

module.exports = router;