const express = require('express');
const cors = require('cors');
const router = express.Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator');

router.use(cors());

// Route for creating a new user
router.post(
  '/createuser',
  [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = new User({
        name: req.body.name,
        password: req.body.password, // Note: Storing the plain text password
        email: req.body.email,
        location: req.body.location,
      });

      await user.save();

      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false });
    }
  }
);

// Route for user login (without password hashing)
router.post('/loginuser', [
  body('email').isEmail(),
  body('password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const email = req.body.email;
  try {
    const userData = await User.findOne({ email });
    if (!userData) {
      return res.status(400).json({ errors: 'Try logging in with correct credentials' });
    }

    if (req.body.password !== userData.password) { // Compare plain text password
      return res.status(400).json({ errors: 'Try logging in with correct credentials' });
    }

    return res.json({ success: true, user: userData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

module.exports = router;
