const express = require('express')

const assessmentsRouter = express.Router()

router.get('/assessments/:id', (req, res) => {
  const id = req.params.id
})

router.put('/assessments/:id', (req, res) => {
  const assID = req.params.id
  const evidenceInfo = req.body
  db.updateEvidence(assID, evidenceInfo).catch(err =>
    res.status(500).json({ error: 'Fail to add evidence to assesment!' })
  )
})

module.exports = assessmentsRouter
