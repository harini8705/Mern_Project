const express = require('express');
const router = express.Router();
const FAQ = require('../models/FAQ');

router.get('/', async (req, res) => {
  const faqs = await FAQ.find();
  res.json(faqs);
});

router.post('/', async (req, res) => {
  const { question, answer } = req.body;
  const newFAQ = new FAQ({ question, answer });
  await newFAQ.save();
  res.status(201).json(newFAQ);
});

module.exports = router;
