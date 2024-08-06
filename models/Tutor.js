const { DataTypes } = require('sequelize')

const conn = require('./bd/conn.js')

const Tutor = bd.define('Tutor', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
    },

    date_of_birth: {
        type: DataTypes.STRING
    },

    zip_code: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})