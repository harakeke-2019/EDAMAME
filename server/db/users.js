const connection = require('./')

module.exports = {
  getUsers,
  newUser
}

function getUsers (db = connection) {
  return db('users')
    .select()
}

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
