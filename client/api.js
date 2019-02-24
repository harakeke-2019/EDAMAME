import request from 'superagent'

const apiUrl = 'http://localhost:3000/api/v1'

export function getAssessments () {
  return request
    .get(`${apiUrl}/assessments`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get Assessments')
    })
}

export function getUsers () {
  request
    .get(`${apiUrl}/users`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get users')
    })
}
