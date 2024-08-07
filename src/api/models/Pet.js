const { DataTypes } = require("sequelize");

const bd = require("../../conn.js");

const Pet = bd.define("Pet", {
  name: {
    type: DataTypes.STRING,
    required: true,
  },

  species: {
    type: DataTypes.STRING,
    required: true,
  },

  carry: {
    type: DataTypes.STRING,
    required: true,
  },

  weight: {
    type: DataTypes.FLOAT,
    required: true,
  },

  date_of_birth: {
    type: DataTypes.STRING,
  },
});

module.exports = Pet;
