const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

router.post('/', async (req, res) => {
  const { name, email, phone, selectedDance } = req.body;
  const registration = new Registration({ name, email, phone, selectedDance });
  await registration.save();
  res.status(201).json({ message: 'Registered successfully!' });
});

module.exports = router;
