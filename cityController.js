const express = require("express");
const City = require("./cityModel");

const router = express.Router();

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
