const express = require("express");
const router = express.Router();
const Tutor = require("../models/Tutor.js");

router.get("/tutors", (req, res) => {});

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
});

module.exports = router;
