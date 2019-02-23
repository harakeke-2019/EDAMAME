import request from 'superagent'
const url = 'http://localhost:3000/api/v1/assessments'

// return info about student's particular assessment
export function getAssessmentStatus (studentId, assessmentId) {
  return request.get(`${url}/assessmentStatus/${studentId}/${assessmentId}`)
  .then(res => {
    return res.body
  })
  .catch(err => {
    if (err) throw Error('Cannot get assessment status')
  })
}