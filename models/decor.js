const mongoose = require("mongoose");

const decorSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  Category: {
    type: String,
    enum: ["Fan", "lights", "LEDs"],
  },
});

const Decor = mongoose.model("Decor", decorSchema);

module.exports = Decor;
