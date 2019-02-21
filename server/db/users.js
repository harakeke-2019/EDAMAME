const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  newUser: newUser
}

// newUser db function for post register route
function newUser (user, db = connection) {
  return db('users')
    .returning('id')
    .insert({
      name: user.name,
      surname: user.surname,
      role: user.role,
      hash: user.password
    })
}

// addCohort db function

// function addCohort (id, cohort, db = connection) {
//   return db('students')
//     .insert({cohort})
// }
