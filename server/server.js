const path = require('path')
const express = require('express')

const server = express()

const starterRoute = require('./routes/starter')
const users = require('./routes/usersRoutes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/', starterRoute)
server.use('/api/v1/users', users)

module.exports = server
