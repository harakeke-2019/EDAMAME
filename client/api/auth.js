import request from 'superagent'

const url = 'http://localhost:3000/api/v1/auth'

export function register (user) {
  return request
    .post(`${url}/register`)
    .send(user)
    .then(res => res.body)
}
