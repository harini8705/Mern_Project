const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

router.get('/', async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

router.post('/', async (req, res) => {
  const { name, description, imageUrl, timing, fee } = req.body;
  const category = new Category({ name, description, imageUrl, timing, fee });
  await category.save();
  res.status(201).json(category);
});

module.exports = router;
