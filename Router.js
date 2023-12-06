const express = require("express");
const { City, Header } = require("./cityModel");
// const { City, Header } = require(path.join(__dirname, "your-model-file"));


const router = express.Router();

// Define a route to render HTML using EJS
router.get("/", (req, res) => {
  // Pass data to the EJS template
  const data = {
    title: "Express with EJS",
    message: "Rendering HTML with EJS template engine!",
  };

  // Render the 'index.ejs' template and pass data to it
  res.render("index", { data });
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

// Define a route to handle the GET request for the Header model
router.get("/header", async (req, res) => {
  try {
    // Fetch data from the Header collection
    const headerData = await Header.find();

    // Send the data as the response
    res.json(headerData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// router.post("/cities/update", async (req, res) => {
//   const { cityName, newPrice } = req.body;
//   try {
//     await City.findOneAndUpdate({ name: cityName }, { price: newPrice });
//     res.json({ message: "City price updated successfully" });
//   } catch (err) {
//     console.error("Error updating city price:", err);
//     res.status(500).send("Internal Server Error");
//   }
// });

// Update the price of a city

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

// Update the price of a header
router.post("/header/update", async (req, res) => {
  const { headerName, newPrice } = req.body;
  try {
    await Header.findOneAndUpdate({ name: headerName }, { price: newPrice });
    res.json({ message: "Header price updated successfully" });
  } catch (err) {
    console.error("Error updating header price:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

