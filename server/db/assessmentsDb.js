const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

function getAssessments( db=connection){
    return db('modules')
    .join('assessments', 'id', 'module_id' )
    .select()
}

function getAssessmentsById(id, db=connection){
    return db('assessments')
    .join('students_assessments', 'id', 'assessment_id')
    .where('id',id)
    .select()
}
module.exports ={
    getAssessmentsById,
    getAssessments,
}
