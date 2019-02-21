const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAssessments(id, db = connection) {}

function updateEvidence(assId, evidenceInfo, db) {
  return db('Students_Assessments')
    .where('assessment_id', assId)
    .update({
      evidence: evidenceInfo.evidence,
      date_modified: evidenceInfo.date
    })
}

module.exports = {
  getAssessments,
  updateEvidence
}
