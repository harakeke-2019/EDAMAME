exports.up = function (knex, Promise) {
  return knex.schema.createTable('exercises', table => {
    table.increments('id').primary()
    table.integer('module_id')
    table.string('title')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('exercises')
}
