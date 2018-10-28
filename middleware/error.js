const winston = require("winston");

module.exports = function(err, req, res, next) {
  //logging
  winston.error(err.message, err);
  //response
  res.status(500).send("Something failed.");
};
