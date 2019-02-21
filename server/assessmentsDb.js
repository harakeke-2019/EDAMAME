const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAssessments(id, db=connection){
    
}

function updateEvidence(id, evidence, db){
  return db('Students_Assessments')
        .where('assessment_id',id)
        .update('evidence', evidence)
}


module.exports ={
    getAssessments,
    updateEvidence
}
