const connection = require('./index')
const {generateHash} = require('../auth/hash')

module.exports = {
  getUsers,
  registerUser,
  handleSignin,
  getStudentAssessmentStatuses
}

function getUsers (db = connection) {
  return db('users')
    .select()
}

function registerUser (user, db = connection) {
  return generateHash(user.password)
    .then(hash => {
      return db('users')
        .where({
          name: user.name,
          surname: user.surname
        })
        .then(res => {
          if (res.length === 0) {
            user.hash = hash
            delete user.password
            return db('users').insert(user)
          } else {
            throw new Error('user exists')
          }
        })
    })
}

function handleSignin (user, db = connection) {
  return db('users')
    .where({
      name: user.name,
      surname: user.surname
    })
    .first()
}

// function you use to assist with your current issue
function getStudentAssessmentStatuses (id, db = connection) {
  return db('students_assessments')
    .join('exercises', 'students_assessments.assessment_id', 'exercises.assessment_id')
    .join('statuses', 'students_assessments.status_id', 'statuses.id')
    .join('assessments', 'students_assessments.assessment_id', 'assessments.id')
    .join('modules', 'assessments.module_id', 'modules.id')
    .where('students_assessments.student_id', id)
    .select(
      'students_assessments.evidence as evidence',
      'exercises.title as excersiseTitle',
      'statuses.name as status',
      'assessments.title as assessmentTitle',
      'students_assessments.student_id as studentId',
      'modules.title as moduleTitle',
      'assessments.description as assessmentDescription'
    )
}

// addCohort db function

// function addCohort (id, cohort, db = connection) {
//   return db('students')
//     .insert({cohort})
// }
