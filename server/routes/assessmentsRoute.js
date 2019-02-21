const express = require('express')
const router = express.Router()
const assessmentsDb = require('./assessmentsDb')

router.get('/', (req, res)=>{
    router.getAssessments()
        .then (assessments=>{
            res.json(assessments)
        })
        .catch(err=>{
            res.status(500).send.(err.message)
        })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  assessmentsDb.getAssessmentsById(id)
    .then(assessment=>res.json(assessment))
    .catch(err => {
        res.status(500).send(err.message)
      })
})

module.exports = router