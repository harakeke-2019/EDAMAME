exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('hash')
    table.string('role')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
