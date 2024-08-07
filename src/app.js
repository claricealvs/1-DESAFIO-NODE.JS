const express = require("express");
const app = express();

const conn = require("../bd/conn");

const Tutor = require("../models/Tutor");
const Pet = require("../models/Pet");

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
