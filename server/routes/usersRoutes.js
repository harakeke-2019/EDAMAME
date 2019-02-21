const express = require('express')
const router = express()
const db = require('../DB/db')

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
