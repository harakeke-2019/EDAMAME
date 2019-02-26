const connection = require('./')

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
