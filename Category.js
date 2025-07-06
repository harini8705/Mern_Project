const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  timing: String,
  fee: String
});

module.exports = mongoose.model('Category', categorySchema);
