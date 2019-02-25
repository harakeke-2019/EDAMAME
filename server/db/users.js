const connection = require('./index')
const {generateHash} = require('../auth/hash')

module.exports = {
  getUsers,
  registerUser
}

function getUsers (db = connection) {
  return db('users')
    .select()
}

function registerUser (user, db = connection) {
  return generateHash(user.password)
    .then(hash => {
      return db('users')
        .where({
          name: user.name,
          surname: user.surname
        })
        .then(res => {
          if (res.length === 0) {
            user.hash = hash
            delete user.password
            return db('users').insert(user)
          } else {
            throw new Error('user exists')
          }
        })
    })
}
