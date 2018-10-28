const Joi = require("joi");
const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 255 },
  length: { type: Number },
  points: { type: Number, required: true }
});

const Destination = mongoose.model("Destinations", destinationSchema);

function validateDestination(destination) {
  const schema = {
    name: Joi.string().required(),
    length: Joi.number(),
    points: Joi.number().required()
  };
  return Joi.validate(destination, schema);
}

exports.destinationSchema = destinationSchema;
exports.Destination = Destination;
exports.validate = validateDestination;
