import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

// express app
const app = express();

// for sending data as json to server
app.use(express.json());

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

app.get("/ping", (req, res) => {
  res.json({ message: "Pinging..." });
});

app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
