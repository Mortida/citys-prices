const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  name: { type: String, unique: true },
  price: Number,
});

const City = mongoose.model("City", citySchema);

module.exports = City;
