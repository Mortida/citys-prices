const express = require("express");
const City = require("./cityModel");

const router = express.Router();


// Define a route to render HTML using EJS
router.get('/', (req, res) => {
  // Pass data to the EJS template
  const data = {
    title: 'Express with EJS',
    message: 'Rendering HTML with EJS template engine!',
  };

  // Render the 'index.ejs' template and pass data to it
  res.render('index', { data });
});

router.get("/cities", async (req, res) => {
  try {
    const cities = await City.find({});
    res.json(cities);
  } catch (err) {
    console.error("Error fetching cities from database:", err);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/cities/update", async (req, res) => {
  const { cityName, newPrice } = req.body;
  try {
    await City.findOneAndUpdate({ name: cityName }, { price: newPrice });
    res.json({ message: "City price updated successfully" });
  } catch (err) {
    console.error("Error updating city price:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
