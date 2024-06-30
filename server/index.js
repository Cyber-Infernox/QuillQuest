import dotenv from "dotenv";

import express from "express";
import mongoose from "mongoose";

dotenv.config();

// express app
const app = express();

// connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to database");
    });
  })
  .catch((error) => {
    console.log(error);
  });
