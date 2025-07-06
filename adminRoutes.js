const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const FAQ = require('../models/FAQ');
const Contact = require('../models/Contact');
const Registration = require('../models/Registration');
const Category = require('../models/Category');
const authMiddleware = require('../middleware/authMiddleware');

// ✅ Admin Login Route: POST /api/admin/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: admin._id, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Admin Panel Data Route: GET /api/admin/all-data
router.get('/all-data', authMiddleware, async (req, res) => {
  try {
    const faqs = await FAQ.find();
    const contacts = await Contact.find();
    const registrations = await Registration.find();
    const categories = await Category.find();

    res.json({ faqs, contacts, registrations, categories });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch admin data' });
  }
});

module.exports = router;
