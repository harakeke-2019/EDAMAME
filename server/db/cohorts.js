const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = {
    getAllCohorts
}

function getAllCohorts () {
    return db('cohorts')
    .select('name', 'year')
}

