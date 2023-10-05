const express = require("express");
const db = require("./db");
const cityRoutes = require("./cityController");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors()); // Enable CORS for all routes
app.use(cityRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
