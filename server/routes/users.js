const express = require('express')
const router = express.Router()
const db = require('../db/users')

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
