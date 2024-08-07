const express = require("express");
const router = express.Router();
const Tutor = require("../models/Tutor.js");

// retorna todos os tutores
router.get("/tutors", async (req, res) => {
  const tutors = await Tutor.findAll({ raw: true });
  console.log("Tutores", tutors);
  res.status(201).json(tutors);
});

// retorna tutor por id

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
    .then(() => res.send("Tutor criado"))
    .catch((err) => console.log(err));
  res.redirect("/tutors");
});

// atualiza tutor
router.post("/tutor/:id", (req, res) => {
  const { name, phone, email, date_of_birth, zip_code } = req.body;
  const id = req.params.id;

  // cria objeto com todas as propriedades de user
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
      res.redirect("/tutors");
    })
    .catch((err) => console.log(err));
});

module.exports = router;
