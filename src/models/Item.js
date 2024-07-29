const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
  // fields lainnya
});

module.exports = mongoose.model('Item', ItemSchema);
