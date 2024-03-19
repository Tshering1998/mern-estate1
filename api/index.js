import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import listingRouter from "./routes/listingRoutes.js";
import cookieParser from "cookie-parser";

import path from "path";

dotenv.config();
const app = express();

app.use(express.json());

const __dirname = path.resolve();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to databse");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
app.use(cookieParser());

//routes

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

//middleware to handle error

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
