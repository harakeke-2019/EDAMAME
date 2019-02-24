import request from 'superagent'

const URL = 'http:localhost:3000/v1'

export const assessmentContent = (assesmentId) => {
  return request
    .get(`${URL}/assessments/${assesmentId}`)
    .then(res => res.body)
    .catch(err => {
      throw new Error(err)
    })
}
