const mongoose = require("mongoose");

// Schema for the City model
const citySchema = new mongoose.Schema({
  name: { type: String, unique: true },
  price: Number,
});

// Schema for the Header model (assuming a different schema)
const headerSchema = new mongoose.Schema({
  name: { type: String },
  price: Number,
});

// Model for the City collection
const City = mongoose.model("City", citySchema);

// Model for the Header collection
const Header = mongoose.model("Header", headerSchema);

// Export both models
module.exports = {
  City: City,
  Header: Header,
};
