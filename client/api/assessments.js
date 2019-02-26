import request from 'superagent'

const URL = 'http:localhost:3000/api/v1/assessments'

export const assessmentContent = (assesmentId) => {
  return request
    .get(`${URL}/${assesmentId}`)
    .then(res => res.body)
    .catch(err => {
      throw new Error(err)
    })
}