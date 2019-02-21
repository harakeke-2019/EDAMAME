const express = require('express')
const db = require('../db/cohorts')
const router = express.Router()

module.exports = router


router.get('/', (req, res) => {
    db.getAllCohorts()
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
  })

  
