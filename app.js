import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(
    "mongodb+srv://admin:*****@cluster0.jdydyme.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected Successfully to Database and listening on port 5000")
  )
  .catch((err) => console.log(err));
