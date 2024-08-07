const { DataTypes } = require("sequelize");

const conn = require("../../conn.js");

const Tutor = bd.define("Tutor", {
  name: {
    type: DataTypes.STRING,
    required: true,
  },

  phone: {
    type: DataTypes.STRING,
    required: true,
  },

  email: {
    type: DataTypes.STRING,
    required: true,
  },

  date_of_birth: {
    type: DataTypes.STRING,
  },

  zip_code: {
    type: DataTypes.STRING,
    required: true,
  },
});

module.exports = Tutor;