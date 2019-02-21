import request from 'superagent'

const userUrl 'http://localhost:3000/api/v1'

export function getUsers (callback) {
  request
    .get(`${userUrl}/users`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get users')
    })
}
