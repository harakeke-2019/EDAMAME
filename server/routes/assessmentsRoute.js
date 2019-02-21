const express = require('express')
const assessmentsRouter = express.Router()
const assessmentsDb = require('./assessmentsDb')

router.get('/:id', (req, res) => {
  const id = req.params.id
  assessmentsDb.getAssessments(id)
    .then(assessment=>res.json(assessment))
    .catch(err => {
        res.status(500).send(err.message)
      })
})


module.exports = assessmentsRouter