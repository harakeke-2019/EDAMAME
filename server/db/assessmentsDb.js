const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

function getAssessments( db=connection){
    return db('modules')
    .join('assessments', 'modules.id', 'module_id' )
    .select('modules.id as ModuleId', 'modules.title as moduleTitle', 'assessments.id as assessmentsId', 'assessments.title as assessmentsTitle', 'assessments.description', 'assessments.link', 'assessments.week_day')
}

function getAssessmentsById(id, db=connection){
    return db('assessments')
    .join('student_assessments', 'assessments.id', 'assessment_id')
    .where('assessments.id',id)
    .select()
}
module.exports ={
    getAssessmentsById,
    getAssessments,
}
