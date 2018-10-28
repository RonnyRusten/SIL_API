const config = require("config");
const winston = require("winston");
require("winston-mongodb");
require("express-async-errors");

module.exports = function() {
  process.on("unhandledRejection", ex => {
    throw ex;
  });

  process.on("unhandledRejection", ex => {
    winston.error(ex.message, ex);
    process.exit(1);
  });

  const db = config.get("db");

  winston.configure({
    transports: [
      new winston.transports.Console({ level: "debug" }),
      new winston.transports.File({
        filename: "logfile.log",
        handleExceptions: true
      })
      // new winston.transports.MongoDB({
      //   db: db,
      //   handleExceptions: true
      // })
    ]
  });
};
