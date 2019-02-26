import request from 'superagent'

const assessmentsUrl = 'http://localhost:3000/api/v1/assessments'

export function getAssessments () {
  return request
    .get(assessmentsUrl)
    .then(assessmentContent => assessmentContent.body)
    .catch(err => {
      if (err) throw Error('Cannot get Assessments')
    })
}
