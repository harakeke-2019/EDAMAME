const path = require('path')
const express = require('express')

const server = express()

const starterRoute = require('./routes/starter')
const usersRoutes = require('./routes/usersRoutes')
const cohortRoutes = require('./routes/cohortRoutes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/', starterRoute)
server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/cohorts', cohortRoutes)

module.exports = server
