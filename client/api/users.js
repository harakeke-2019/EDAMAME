import request from 'superagent'

const userUrl = 'http://localhost:3000/api/v1/users'

export function getUsers () {
  request
    .get(`${userUrl}/`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get users')
    })
}
