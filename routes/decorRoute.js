// Importing express , colors , Decors
const express = require("express");
const colors = require("colors");
const Decor = require("../models/decor");
// Router
const router = express.Router();

// Get the Data
router.get("/", async (req, res) => {
  try {
    const data = await Decor.find();
    console.log("Data Fetched".yellow);
    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching data:".red, err);
    res.status(500).json({ err: "Internal Server Error" });
  }
});
// Post the Data

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newDecor = new Decor(data);
    const response = await newDecor.save();
    console.log("Data Saved Successfully".yellow);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal Server Error".red });
  }
});

// Update Data
router.put("/:id", async (req, res) => {
  try {
    const getId = req.params.id;
    const updatedInfo = req.body;
    const response = await Decor.findByIdAndUpdate(getId, updatedInfo, {
      runValidators: true,
      new: true,
    });

    if (!response) {
      return res.status(404).json({
        error: "Person Not Found with Given Id",
      });
    }

    console.log("Data updated".green);
    res.status(200).json(response);
  } catch (err) {
    console.error("Error updating data:".red, err);
    res.status(500).json({ err: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const getId = req.params.id;
    const response = await Decor.findByIdAndDelete(getId);
    if (!response)
      return res.status(404).json({
        error: "Person Not Found with Given Id".red,
      });
    console.log("Data Deleted with Given Id".green);
    res
      .status(200)
      .json({ message: "Person deleted With Given id Succesfully" });
  } catch (err) {
    console.error("Error updating data:".red, err);
    res.status(500).json({ err: "Internal Server Error" });
  }
});

module.exports = router;
