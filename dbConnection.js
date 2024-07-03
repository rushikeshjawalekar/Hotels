const mongoose = require("mongoose");
const colors = require("colors");
mongoose
  .connect("mongodb://127.0.0.1:27017/MyHome")
  .then(() => {
    console.log("Connected Successfully to Mongodb".green);
  })
  .catch(() => {
    console.log("Oh no some Error Happened".red);
  });

module.exports = mongoose;
