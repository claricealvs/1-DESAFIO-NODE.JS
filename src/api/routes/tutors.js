const express = require("express");
const router = express.Router();
const Tutor = require("../models/Tutor.js");
const Pet = require("../models/Pet.js");

// retorna todos os tutores com seus pets
router.get("/tutors", async (req, res) => {
  const tutors = await Tutor.findAll({
    include: [{ model: Pet }],
  });
  res.status(200).json(tutors);
});

// retorna tutor por id
router.get("/tutor/:id", function (req, res) {
  const id = req.params.id;

  Tutor.findOne({
    include: Pet,
    where: {
      id: id,
    },
  })
    .then((tutor) => {
      // receber os dados
      res.json(res.status(200).json({ tutor: tutor.get({ plain: true }) }));
    })
    .catch((err) => console.log(err));
});

// adiciona tutor
router.post("/tutor", (req, res) => {
  const { name, phone, email, date_of_birth, zip_code } = req.body;
  console.log(req.body);

  Tutor.create({
    name,
    phone,
    email,
    date_of_birth,
    zip_code,
  })
    .then(() => res.json(req.body))
    .catch((err) => console.log(err));
});

// atualiza tutor
router.put("/tutor/:id", (req, res) => {
  const { name, phone, email, date_of_birth, zip_code } = req.body;
  const id = req.params.id;

  // cria objeto com todas as propriedades de tutor
  const tutorData = {
    id,
    name,
    phone,
    email,
    date_of_birth,
    zip_code,
  };

  console.log(tutorData);

  Tutor.update(tutorData, {
    where: {
      id: id,
    },
  })
    .then((tutor) => {
      res.json(tutorData);
    })
    .catch((err) => console.log(err));
});

// remove tutor por id
router.delete("/tutor/:id", async (req, res) => {
  const id = req.params.id;

  await Pet.destroy({ where: { TutorId: id } });

  Tutor.destroy({
    where: {
      id: id,
    },
  })
    .then((tutor) => {
      res.status(204).send();
    })
    .catch((err) => console.log(err));
});

module.exports = router;
