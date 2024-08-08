const express = require("express");
const router = express.Router();
const Tutor = require("../models/Pet.js");

// retorna todos os pets
router.get("/pets", async (req, res) => {
  const pets = await Pet.findAll({ raw: true });
  console.log("Pets", pets);
  res.status(201).json(pets);
});

// adiciona pet
router.post("/pet", (req, res) => {
  const { name, species, carry, wheight, date_of_birth } = req.body;
  console.log(req.body);

  Pet.create({
    name,
    species,
    carry,
    wheight,
    date_of_birth,
  })
    .then(() => res.send("Pet criado"))
    .catch((err) => console.log(err));
  res.redirect("/pets");
});
