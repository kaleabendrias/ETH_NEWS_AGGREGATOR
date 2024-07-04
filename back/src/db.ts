const mongoose = require("mongoose");
require("dotenv").config();

const db_uri = process.env.DB_URI;

const connectDb = async () => {
  try {
    const result = await mongoose.connect(db_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB: " + result.connection.host);
  } catch (err) {
    console.error("Error connecting to DB: ", err);
  }
};

module.exports = connectDb;
