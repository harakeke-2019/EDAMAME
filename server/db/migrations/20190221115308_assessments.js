exports.up = function (knex, Promise) {
  return knex.schema.createTable('assessments', table => {
    table.increments('id').primary()
    table.integer('module_id')
    table.string('title')
    table.string('description')
    table.string('link')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('assessments')
}
