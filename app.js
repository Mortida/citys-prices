const express = require("express");
const db = require("./db");
const cityRoutes = require("./cityController");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes
app.use(cityRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
