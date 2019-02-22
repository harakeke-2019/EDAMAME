const bcrypt = require('bcrypt-nodejs')
const connection = require('./')

module.exports = {
  getUsers,
  registerUser
}

function getUsers (db = connection) {
  return db('users')
    .select()
}

function registerUser (user, db = connection) {
  return db('users')
    .insert({
      name: user.name,
      surname: user.surname,
      role: user.role,
      hash: bcrypt.hashSync(user.hash)
    })
}
