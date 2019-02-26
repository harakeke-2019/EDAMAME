import request from 'superagent'

const URL = 'http://localhost:3000/api/v1/assessments'

export const assessmentContentById = (assesmentId) => {
  return request
    .get(`${URL}/${assesmentId}`)
    .then(res => res.body)
    .catch(err => {
      throw new Error(err)
    })
}

export function getAssessments () {
  return request
    .get(URL)
    .then(assessments => assessments.body)
    .catch(err => {
      if (err) throw Error('Cannot get assessments')
    })
}
