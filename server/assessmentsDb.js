const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAssessments(moduleId, db=connection){
    return db('Modules')
    .join('Assessments', 'id', 'module_id')
    .where('Modules.id', moduleId)
    .select()
}

function getAssessmentsById(id, db=connection){
    return db('Assessments')
    .join('Students_Assessments', 'id', 'assessment_id')
    .where('id',id)
    .select()
}
module.exports ={
    getAssessmentsById,
    getAssessments,
}
