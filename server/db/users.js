const connection = require('./')

module.exports = {
  getUsers,
  newUser,
  getModulesById
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

function getModulesById (id, db = connection) {
  return db('student_assessments')
    .where('student_assessments.student_id', id)
    // .join('assessments', 'student_assessments.student_id', 'assessments.id')
    // .join('modules', 'assessments.id', 'modules.id')
    // .where('student_assessments.student_id', id)
    .select()
}

// addCohort db function

// function addCohort (id, cohort, db = connection) {
//   return db('students')
//     .insert({cohort})
// }
