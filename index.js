const express = require("express");
const app = express();
const colors = require("colors");
require("dotenv").config();

// Middleware Function
const logRequest = (req, res, next) => {
  console.log(
    `${new Date().toLocaleString()} Request Made to :${req.originalUrl}`
  );
  next();
};

app.use(logRequest);
// ends here
// importing
const mongoose = require("./dbConnection");
const Decor = require("./models/decor");

// Parsing
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// import Routers file
const decorRoute = require("./routes/decorRoute");
app.use("/decor", decorRoute);

// below shows that if port is not present in .env file it will use the 3000 one
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log("Connection Started on 3000".green);
});

// Export code
module.exports = colors;
