const Joi = require("joi");
const mongoose = require("mongoose");
const { userSchema } = require("./user");
const { destinationSchema } = require("./destination");

const Trip = mongoose.model(
  "Trips",
  new mongoose.Schema({
    date: { type: Date, required: true, default: Date.now },
    user: { type: userSchema, required: true },
    destination: { type: destinationSchema, required: true }
  })
);

function validateTrip(trip) {
  const schema = {
    date: Joi.date().required(),
    userId: Joi.objectId().required(),
    destinationId: Joi.objectId().required()
  };
  return Joi.validate(trip, schema);
}

exports.Trip = Trip;
exports.validate = validateTrip;
