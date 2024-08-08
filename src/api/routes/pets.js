const express = require("express");
const router = express.Router();
const Pet = require("../models/Pet.js");

// retorna todos os pets
router.get("/pets", async (req, res) => {
  const pets = await Pet.findAll({ raw: true });
  console.log("Pets", pets);
  res.status(201).json(pets);
});

// adiciona pet
router.post("/pet/:tutorId", async (req, res) => {
  const { name, species, carry, weight, date_of_birth } = req.body;
  console.log(req.body);

  const TutorId = req.params.tutorId;

  const pet = {
    TutorId,
    name,
    species,
    carry,
    weight,
    date_of_birth,
  };

  await Pet.create(pet)
    .then(() => res.send("Pet criado"))
    .catch((err) => console.log(err));
  res.json(req.body);
});

// atualiza pet
router.post("/pet/:petId/tutor/:tutorId", (req, res) => {
  const { name, species, carry, weight, date_of_birth } = req.body;
  const id = req.params.id;

  // cria objeto com todas as propriedades de user
  const petData = {
    id,
    name,
    species,
    carry,
    weight,
    date_of_birth,
  };

  console.log(petData);

  Pet.update(petData, {
    where: {
      id: id,
    },
  })
    .then((pets) => {
      res.json(req.body);
    })
    .catch((err) => console.log(err));
});

// remove pet por id
router.delete("/pet/:id", function (req, res) {
  const id = req.params.id;

  Pet.destroy({
    where: {
      id: id,
    },
  })
    .then((pet) => {
      res.status(204);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
