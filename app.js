const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./db");
const router = require("./Router");

require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());
app.use(router);

const startServer = async () => {
  try {
    await connectDB(); // Wait for the database connection to be established
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit the process if there's a database connection error
  }
};

startServer();
