const path = require('path')
const express = require('express')
const server = express()

const assessmentsRoutes = require('./routes/assessments')
const cohortsRoutes = require('./routes/cohorts')
const usersRoutes = require('./routes/users')
const auth = require('./routes/auth')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/assessments', assessmentsRoutes)
server.use('/api/v1/cohorts', cohortsRoutes)
server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/auth', auth)

module.exports = server
