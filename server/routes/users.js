const express = require('express')
const router = express.Router()
const db = require('../db/users')

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/student/:id', (req, res) => {
  const id = req.params.id
  if (req.query.view === 'modules') {
    db.getStudentAssessmentStatuses(id)
      .then(studentAssessmentStatuses => {
        res.json(studentAssessmentStatuses)
      })
      .catch(err => {
        res.status(500).send(err.message)
      })
  } else {
    res.json('Not built yet!')
  }
})

module.exports = router
