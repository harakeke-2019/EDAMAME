const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

function getUsers (db = connection) {
  return db('users').select()
}

// newUser db function for post register route
function registerUser (user, bcrypt, db = connection) {
  return db('users')
    .insert({
      name: user.name,
      surname: user.surname,
      role: user.role,
      hash: bcrypt.hashSync(user.hash)
    })
}

module.exports = {
  registerUser,
  getUsers,
  connection
}
