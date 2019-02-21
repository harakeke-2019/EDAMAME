import request from 'superagent'

const api = 'api/v1'

export function getAssessments () {
  return request.get(api)
    .then(res => {
      res.json(res.body)
    })
    .catch(() => {
      throw Error('you got an error')
    })
}
