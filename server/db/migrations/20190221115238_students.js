exports.up = function (knex, Promise) {
  return knex.schema.createTable('students', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.integer('cohort_id').references('cohorts.id')
    table.string('name')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('students')
}
