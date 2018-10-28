const express = require("express");
const router = express.Router();
const { Destination, validate } = require("../models/destination");

router.get("/", async (req, res) => {
  const destinations = await Destination.find()
    .select("-__v")
    .sort("name");
  res.send(destinations);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const destination = new Destination({
    name: req.body.name,
    points: req.body.points,
    length: req.body.length
  });

  console.log(destination);

  await destination.save();

  res.send(destination);
});

module.exports = router;
