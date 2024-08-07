const express = require("express");
const app = express();

const bd = require("./conn.js");
const bodyParser = require("body-parser");

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./api/routes/tutors.js"));

// bd connection
bd.authenticate()
  .then(() => {
    console.log("Conectou ao banco de dados.");
  })
  .catch((err) => {
    console.log("Ocorreu um erro ao conectar", err);
  });

// criar as tabelas
bd.sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
