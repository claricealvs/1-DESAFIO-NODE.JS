const express = require("express");
const router = express.Router();
const Tutor = require("../models/Pet.js");

// retorna todos os pets
router.get("/pets", async (req, res) => {
  const pets = await Pet.findAll({ raw: true });
  console.log("Pets", pets);
  res.status(201).json(pets);
});
