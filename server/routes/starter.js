const express = require('express')
// const db = require('../../db')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Welcome to the start of EDAMAME!')
})




module.exports = router
