const express = require("express");
const app = express();

const conn = require("./conn.js");

const Tutor = require("./api/models/Tutor.js");
const Pet = require("./api/models/Pet.js");

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
