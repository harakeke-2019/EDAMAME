import request from 'superagent'

const url = 'http://localhost:3000/api/v1/students'

export function getStudentAssessments (studentId, view) {
  return request.get(`${url}/${studentId}?view=${view}`)
    .then(res => {
      return res.body
    })
    .catch(err => {
      if (err) throw Error(`Cannot get assessments' statuses`)
    })
}
