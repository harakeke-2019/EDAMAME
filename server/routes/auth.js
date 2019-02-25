const express = require('express')
const db = require('../db/users')
const router = express.Router()
const token = require('../auth/token')
const hash = require('../auth/hash')

router.post('/register', register, token.issue)
router.post('/login', validateLogin, checkUser, token.issue)

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

function validateLogin (req, res, next) {
  const {name, surname, password} = req.body

  if (!name) {
    return next(new Error('No name provided'))
  }
  if (!surname) {
    return next(new Error('No surname provided'))
  }
  if (!password) {
    return next(new Error('No password provided'))
  }

  next()
}

function checkUser (req, res, next) {
  db.handleSignin(req.body)
    .then(user => {
      if (user) res.locals.userId = user.id
      return user && hash.verify(user.hash, req.body.password)
    })
    .then(isValid => {
      return isValid ? next() : invalidCredentials(res)
    })
    .catch(() => {
      res.status(400).json({
        errorType: 'DATABASE_ERROR'
      })
    })
}

function invalidCredentials (res) {
  res.status(400).json({
    errorType: 'INVALID_CREDENTIALS'
  })
}

module.exports = router
