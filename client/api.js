import request from 'superagent'

const userUrl '#'

export function getUsers (callback) {
  request
    .get(userUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}

