const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  newUser: newUser,
  addCohort: addCohort
}

// newUser db function for post register route
function newUser (name, surname, role, password, db = connection) {
  return db('users')
    .returning('id')
    .insert({name, surname, role, hash: password})
}

// newUserCohort db function

function addCohort (cohort, db = connection) {
  return db('students')
    .insert({cohort})
}
