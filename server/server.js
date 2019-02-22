const path = require('path')
const express = require('express')

const server = express()

const starterRoute = require('./routes/starter')
const cohortRoutes = require('./routes/cohortRoutes')
const assessmentsRoutes = require('./routes/assessmentsRoutes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/', starterRoute)
server.use('/api/v1/assessments', assessmentsRoutes)
server.use('/api/v1/cohorts', cohortRoutes)

module.exports = server
