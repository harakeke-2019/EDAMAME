const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getAllCohorts
}

function getAllCohorts () {
    return db('cohorts')
    .select('name', 'year')
}

