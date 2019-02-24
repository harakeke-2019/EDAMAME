const connection = require('./')

function getAssessments( db=connection){
    return db('modules')
    .join('assessments', 'modules.id', 'module_id' )
    .select('modules.id as moduleId', 'modules.title as moduleTitle', 'assessments.id as assessmentsId', 'assessments.title as assessmentsTitle', 'assessments.description', 'assessments.link', 'assessments.week_day')
}

function getAssessmentsById(id, db=connection){
    return db('assessments')
    .join('student_assessments', 'assessments.id', 'assessment_id')
    .where('assessments.id',id)
    .select()
}

function updateEvidence(id, evidence, db = connection) {
    return db('student_assessments')
      .where('assessment_id', id)
      .andWhere('student_id', evidence.studentId)
      .update({
        evidence: evidence.evidence,
        date_modified: evidence.date
      })
      .catch(err => err)
  }


module.exports ={
    getAssessmentsById,
    getAssessments,
}
