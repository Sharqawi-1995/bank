const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const api = require("./routes/api.js");

mongoose.connect("mongodb://127.0.0.1/bank", { useNewUrlParser: true });
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers","Content-Type, Authorization, Content-Length, X-Requested-With");
  next();
});

app.use("/", api);

const PORT = 3200;
app.listen(PORT, console.log(`listening on ${PORT}`));
