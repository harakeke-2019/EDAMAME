const express = require('express')

const db = require('../db')

const router = express.Router()

// route to register new user (auth routes prefixed with /api/v1/auth)

router.post('/register', (req, res) => {
  const name = req.body.name
  const role = req.body.role
  // const lastname = req.body.surname
  // const email = req.body.email
  const password = req.body.hash // Do we need an extra param for password confirmation? Also what encryption stuff do we need here?

  db.newUser(name, role, password)
    .then(res.redirect('/')) // redirect to relevant path for a registered user.

    .catch(displayErr)

  function displayErr (err) {
    res.status(500).send(err.message)
  }
})

// router.post('/register', (req, res) => {
//   const newUser = {name: req.body.name, password: req.body.password}
//   db.users(user)
//     .then((userId) =>
//       db.newProfile(userId, req.body.URL, req.body.hobbies, req.body.image)
//     )
//     .then(res.redirect('/'))
// })
