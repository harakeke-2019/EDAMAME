const enviroment = 'development'
const config = require('../../knexfile')[enviroment]
const connection = require('knex')(config)

module.exports = {
  getUsers
}

function getUsers (db = connection) {
  return db('users')
    .select()
}
