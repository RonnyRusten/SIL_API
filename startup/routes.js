const express = require("express");
const trips = require("../routes/trips");
const destinations = require("../routes/destinations");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/trips", trips);
  app.use("/api/destinations", destinations);
  app.use(error);
};
