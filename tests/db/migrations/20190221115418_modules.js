exports.up = function (knex, Promise) {
  return knex.schema.createTable('modules', table => {
    table.increments('id').primary()
    table.string('title')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('modules')
}
