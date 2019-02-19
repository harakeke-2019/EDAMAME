const path = require('path')
const express = require('express')

const server = express()

const starterRoute = require('./routes/starter')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/', starterRoute)

module.exports = server
