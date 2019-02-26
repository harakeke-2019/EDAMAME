import request from 'superagent'

const url = 'http://localhost:3000/api/v1/auth'

export function registerApi (user) {
  console.log('hello')
  return request
    .post(`${url}/register`)
    .send(user)
    .then(res => res.body)
}

export const signin = (user) => {
  return request
    .post(`${url}/signin`)
    .send(user)
    .then(res => res.body)
}