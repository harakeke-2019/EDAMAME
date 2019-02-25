exports.up = function (knex, Promise) {
  return knex.schema.createTable('students', table => {
    table.increments('id').primary()
    table.integer('user_id')
    table.integer('cohort_id')
    table.string('firstName')
    table.string('lastName')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('students')
}
