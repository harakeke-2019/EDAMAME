const path = require('path')
const express = require('express')

const server = express()

const assessmentsRoutes = require('./routes/assessments')
const cohortsRoutes = require('./routes/cohorts')
const usersRoutes = require('./routes/users')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/assessments', assessmentsRoutes)
server.use('/api/v1/cohorts', cohortsRoutes)
server.use('/api/v1/users', usersRoutes)

module.exports = server
