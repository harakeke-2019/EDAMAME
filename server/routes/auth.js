const express = require('express')
const db = require('../db/users')
const router = express.Router()
const bcrypt = require('bcrypt-nodejs')

router.post('/', (req, res) => {
  db.registerUser(req.body, bcrypt)
    .then(user => {
      console.log(req.body)
      res.json(user[0])
    })
    .catch(err => res.status(400).json('unable to register'))
})

module.exports = router
