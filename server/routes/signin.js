const express = require('express')
const router = express.Router()

router.post('/signin', signin, token.issue)

function signin (req, res, next) {
    getUserByName(req.body.username)
      .then(user => {
        return user || invalidCredentials(res)
      })
      .then(user => {
        return user && hash.verify(user.hash, req.body.password)
      })
      .then(isValid => {
        return isValid ? next() : invalidCredentials(res)
      })
      .catch(() => {
        res.status(400).send({
          errorType: 'DATABASE_ERROR'
        })
      })
  }