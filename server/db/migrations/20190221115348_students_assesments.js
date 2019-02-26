exports.up = function (knex, Promise) {
  return knex.schema.createTable('students_assessments', table => {
    table.increments('id').primary()
    table.integer('student_id').references('students.id')
    table.integer('assessment_id').references('assessments.id')
    table.integer('status_id').references('statuses.id')
    table.string('evidence')
    table.timestamp('date_modified').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('students_assessments')
}
