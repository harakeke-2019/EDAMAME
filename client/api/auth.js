import request from 'superagent'

const url = 'http://localhost:3000/api/v1/auth'

export const signin = (user) => {
  return request
    .post(`${url}/signin`)
    .send({ user })
    .then(res => res.body)
}
