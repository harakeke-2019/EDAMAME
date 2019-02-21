const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAssessments(id, db=connection){
    return db('Assessments')
    .join('Students_Assessments', 'id', 'assessment_id')
    .where('id',id)
    .select('title', 'description', 'evidence')
}
module.exports ={
    getAssessments,
}
