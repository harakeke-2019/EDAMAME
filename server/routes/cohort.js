const express = require('express')
const router = express.Router()

const db = require('...')

router.get('/cohorts/:id', (req, res) => {
  db.getCohort(req.params.id)
    .then(cohort => {
      res.json(cohort)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
