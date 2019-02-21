exports.up = function (knex, Promise) {
  return knex.schema.createTable('cohorts', table => {
    table.increments('id').primary()
    table.string('name')
    table.integer('year')
    table.string('campus')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cohorts')
}
