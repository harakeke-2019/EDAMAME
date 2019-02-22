const environment = 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

function getAssessments(id, db = connection) {}

function updateEvidence(id, evidence, db = connection) {
  return db('student_assessments')
    .where('assessment_id', id)
    .update({
      evidence: evidence.evidence,
      date_modified: evidence.date
    })
    .catch(err => err)
}

module.exports = {
  getAssessments,
  updateEvidence
}
