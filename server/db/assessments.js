const connection = require('.')

function getAssessments( db=connection){
    return db('assessments')
    .join('modules','modules.id', 'module_id')
    .join('exercises', 'assessments.id', 'assessment_id')
    .select('modules.id as moduleId', 'modules.title as moduleTitle', 'assessments.id as assessmentsId', 'assessments.title as assessmentsTitle', 'assessments.description', 'assessments.link', 'assessments.week_day','exercises.id as exerciseId', 'exercises.title as exerciseTitle')
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
