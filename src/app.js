const express = require("express");
const app = express();

const bd = require("./conn.js");

const Tutor = require("./api/models/Tutor.js");
const Pet = require("./api/models/Pet.js");

bd.authenticate()
  .then(() => {
    console.log("Conectou ao banco de dados.");
  })
  .catch((err) => {
    console.log("Ocorreu um erro ao conectar", err);
  });

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Está funcionando!");
});
