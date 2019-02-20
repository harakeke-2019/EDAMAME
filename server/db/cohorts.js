const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getCohort (id, db = connection) {
  return db('Cohorts')
    .where('id', id)
    .select()
}

module.exports = {getCohort}
