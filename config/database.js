const mongoose = require("mongoose");
const config = require("./index");

const db = mongoose
  .connect(config.mongo_uri, { useNewUrlParser: true })
  .then(() => console.log("connected to database"))
  .catch(err => console.error("An error has ocurred", err));

module.exports = db;
