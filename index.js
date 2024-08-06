const express = require('express')
const app = express()

const conn = require('./bd/conn.js')
const Tutor = require('./models/Tutor.js')
const Tutor = require('./models/Pet.js')


conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))