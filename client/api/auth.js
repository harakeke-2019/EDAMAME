import request from 'superagent'

const url = 'http://localhost:3000'

export const signin = (user) => {
  return request
    .post(`${url}/api/v1/auth/signin`)
    .send({ user })
    .then(res => res.body)
}
