const express = require('express')
const db = require('../db/users')
const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.send(users)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
