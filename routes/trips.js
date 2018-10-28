const express = require("express");
const router = express.Router();
const { Trip, validate } = require("../models/trip");

router.get("/", async (req, res) => {
  const trips = await Trip.find()
    .select("-__v")
    .sort("name");
  res.send(trips);
});

module.exports = router;
