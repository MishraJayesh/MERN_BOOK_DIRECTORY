const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: String,
  author: String,
  category: String,
  price: String,
});

module.exports = mongoose.model("Book", BookSchema);