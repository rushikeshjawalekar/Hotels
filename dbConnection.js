const mongoose = require("mongoose");
const colors = require("colors");
require("dotenv").config();
const mongoURL = process.env.mongoURL;
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected Successfully to Mongodb".green);
  })
  .catch((err) => {
    console.log("Oh no some Error Happened".red);
    console.log(err);
  });

module.exports = mongoose;
