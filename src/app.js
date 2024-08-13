const express = require("express");
const app = express();

const bd = require("./conn.js");
const bodyParser = require("body-parser");

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./api/routes/tutors.js"));
app.use("/", require("./api/routes/pets.js"));

const swaggerUi = require("swagger-ui-express");
const swagger = require("../swagger.json");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swagger));

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
  //.sync({ force: true }) apagar dados do banco
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
