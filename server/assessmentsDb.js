const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAssessments(id, db=connection){
    
}
module.exports ={
    getAssessments,
}
