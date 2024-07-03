const express = require("express");
const app = express();
const colors = require("colors");
// importing
const mongoose = require("./dbConnection");
const Decor = require("./models/decor");

// Parsing
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// import Routers file
const decorRoute = require("./routes/decorRoute");
app.use("/decor", decorRoute);
app.listen(3000, () => {
  console.log("Connection Started on 3000".green);
});

// Export code
module.exports = colors;
