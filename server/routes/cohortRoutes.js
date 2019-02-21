const express = require('express')
const db = require('../db/cohorts')
const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getAllCohorts()
    .then(cohorts => {
      res.json(cohorts)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', (req, res) => {
  db.getCohort(req.params.id)
    .then(cohort => {
      res.json(cohort)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
