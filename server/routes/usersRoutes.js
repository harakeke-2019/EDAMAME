const express = require('express')

const db = require('../db/users')

const router = express.Router()

// route to register new user (auth routes prefixed with /api/v1/auth)

router.post('/register', (req, res) => {
  db.newUser(req.body)

  // .then(id => db.addCohort(id[0], cohort))

    .then(res.redirect('/')) // redirect to relevant path for a registered user.

    .catch(displayErr)

  function displayErr (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
