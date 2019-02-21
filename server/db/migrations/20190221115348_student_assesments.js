exports.up = function (knex, Promise) {
  return knex.schema.createTable('student_assessments', table => {
    table.increments('id').primary()
    table.integer('student_id')
    table.integer('assessment_id')
    table.integer('status_id')
    table.string('evidence')
    table.string('date_modified')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('student_assessments')
}
