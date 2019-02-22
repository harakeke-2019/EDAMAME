const environment = 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)


module.exports = {
  getAllCohorts,
  getCohort
}

function getAllCohorts (db = connection) {
  return db('cohorts')
    .select('name', 'year')
}

function getCohort (id, db = connection) {
  return db('cohorts')
    .where('id', id)
    .select()
    .first()
}
