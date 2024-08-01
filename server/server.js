const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const Port = process.env.PORT || 8000;

mongoose
  .connect(`${process.env.URL}`)
  .then(() => {
    app.listen(Port, () => {
      console.log("Server is Running....");
    });
  })
  .catch(() => {
    console.log("Can't Connet to MongoDb");
  });
