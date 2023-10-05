const mongoose = require("mongoose");

const mongoUrl =
  "mongodb+srv://test:09876Poiuy@testcluster.ozbappd.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", (error) => {
      console.error("MongoDB connection error:", error);
      reject(error); // Reject the promise if there's an error
    });
    db.once("open", () => {
      console.log("Connected to MongoDB");
      resolve(); // Resolve the promise when the connection is open
    });
  });
};

module.exports = connectDB;