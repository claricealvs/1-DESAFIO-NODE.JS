const { DataTypes } = require('sequelize')

const conn = require('./bd/conn.js')

const Pet = bd.define('Pet', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    species: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    carry: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

    date_of_birth: {
        type: DataTypes.STRING,
    }
})