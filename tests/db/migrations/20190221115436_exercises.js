exports.up = function (knex, Promise) {
  return knex.schema.createTable('exercises', table => {
    table.increments('id').primary()
    table.integer('assessment_id').references('assessments.id')
    table.string('title')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('exercises')
}
