exports.up = function (knex, Promise) {
  return knex.schema.createTable('students_assessments', table => {
    table.increments('id').primary()
    table.integer('student_id')
    table.integer('assessment_id')
    table.integer('status_id')
    table.string('evidence')
    table.timestamp('date_modified').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('students_assessments')
}
