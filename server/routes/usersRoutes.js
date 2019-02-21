const express = require('express')

const db = require('../db')

const router = express.Router()

// route to register new user (auth routes prefixed with /api/v1/auth)

router.post('/register', (req, res) => {
  const name = req.body.name
  const surname = req.body.surname
  const role = req.body.role
  const cohort = req.body.cohort
  // const email = req.body.email
  const password = req.body.hash // Do we need an extra param for password confirmation? Also what encryption stuff do we need here?

  db.newUser(name, surname, role, password)
    .then(id => db.addCohort(id[0], cohort))
    .then(res.redirect('/')) // redirect to relevant path for a registered user.

    .catch(displayErr)

  function displayErr (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
