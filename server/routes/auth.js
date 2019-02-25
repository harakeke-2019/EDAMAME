const express = require('express')
const db = require('../db/users')
const router = express.Router()
const token = require('../auth/token')

router.post('/register', register, token.issue)

function register (req, res, next) {
  db.registerUser(req.body)
    .then(([id]) => {
      res.locals.userId = id
      next()
    })
    .catch(({message}) => {
      if (message.includes('user exists')) {
        return res.status(400).json({
          ok: false,
          message: 'User already exists.'
        })
      }
      res.status(500).json({
        ok: false,
        message: "Something bad happened. We don't know why."
      })
    })
}

module.exports = router
