const express = require('express')
const router = express()
const request = require('superagent')
const db = require('../DB/db')

router.get('/users', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
