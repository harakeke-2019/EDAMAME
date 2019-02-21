const enviroment = process.env.NODE.ENV || 'development'
const config = require('../knexfile.js')[enviroment]
const connection = require('knex')(config)

module.exports = {
  getUsers
}

function getUsers (db = connection) {
  return db('users')
    .select()
}
