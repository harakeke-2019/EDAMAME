import request from 'superagent'
const userUrl = 'http://localhost:3000/api/v1'

export function getAssessments () {
  return request
    .get(`${userUrl}/assessments`)
    .then(res => {
      console.log('res', res.body)
      return res.body})
    .catch(err => console.log(err))


export function getUsers () {
  request
    .get(`${userUrl}/users`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get users')
    })
}
