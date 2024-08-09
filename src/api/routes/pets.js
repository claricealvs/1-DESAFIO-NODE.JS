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
    .then(() => res.json(req.body))
    .catch((err) => console.log(err));
});

// atualiza pet
router.put("/pet/:petId/tutor/:tutorId", (req, res) => {
  const { name, species, carry, weight, date_of_birth } = req.body;

  const petId = req.params.petId;
  const tutorId = req.params.tutorId;

  // cria objeto com todas as propriedades de pet
  const petData = {
    name,
    species,
    carry,
    weight,
    date_of_birth,
  };

  console.log(petData);

  Pet.update(petData, {
    where: {
      id: petId,
    },
  })
    .then((pets) => {
      res.json(req.body);
    })
    .catch((err) => console.log(err));
});

// remove pet por id
router.delete("/pet/:petId/tutor/:tutorId", function (req, res) {
  const petId = req.params.petId;
  const tutorId = req.params.tutorId;

  Pet.destroy({
    where: {
      TutorId: tutorId,
      id: petId,
    },
  })
    .then((pet) => {
      res.status(204).send();
    })
    .catch((err) => console.log(err));
});

module.exports = router;
