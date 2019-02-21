const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  newUser
}

// newUser db function for post register route
function newUser (name, role, cohort, password, db = connection) {
  return db('relevant database table')
    .join('join up the tables that need to be populated with registration info? Cos yeah. LOL. Not sure...')
    .insert({name, role, cohort, hash: password})
}
