import request from 'superagent'

export function getAssessments () {
  return request
    .get('http://localhost:3000/api/v1/assessments')
    .then(res => {
      console.log('res', res.body)
      return res.body})
    .catch(err => console.log(err))
}
