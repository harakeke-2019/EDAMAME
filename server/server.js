const path = require('path')
const express = require('express')
const server = express()

const starterRoute = require('./routes/starter')
const cohortRoutes = require('./routes/cohortRoutes')
const auth = require('./routes/auth')
const users = require('./routes/users')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/users', users)
server.use('/', starterRoute)
server.use('/api/v1/cohorts', cohortRoutes)
server.use('/api/v1/auth/register', auth)

module.exports = server
