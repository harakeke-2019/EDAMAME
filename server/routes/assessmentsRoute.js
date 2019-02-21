const express = require('express')
const router = express.Router()
const db = require('../assessmentsDb')

router.get('/:id', (req, res) => {
  const id = req.params.id
})

router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  const evidence = req.body
  db.updateEvidence(id, evidence).catch(err =>
    res.status(500).json({ error: 'Fail to add evidence to assessment!' })
  )
})

module.exports = router
