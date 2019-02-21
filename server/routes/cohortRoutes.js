const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router


router.get('/cohorts', (req, res) => {
    db.getAllCohorts()
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
  })