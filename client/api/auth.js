import request from 'superagent'

const url = 'http://localhost:3000'

export function register (user) {
  return request
    .post(`${url}/api/v1/auth/register`)
    .send(user)
    .then(res => res.body)
}
