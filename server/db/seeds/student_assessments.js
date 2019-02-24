exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student_assessments')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('student_assessments').insert([
        {
          id: 1,
          student_id: 1,
          assessment_id: 1,
          status_id: 4,
          evidence: 'evidence',
          date_modified: 'date'
        },
        {
          id: 2,
          student_id: 1,
          assessment_id: 2,
          status_id: 3,
          evidence: 'evidence',
          date_modified: 'date'
        },
        {
          id: 3,
          student_id: 1,
          assessment_id: 3,
          status_id: 2,
          evidence: 'evidence',
          date_modified: 'date'
        },
        {
          id: 4,
          student_id: 1,
          assessment_id: 4,
          status_id: 1,
          evidence: 'evidence',
          date_modified: 'date'
        },
        {
          id: 5,
          student_id: 2,
          assessment_id: 3,
          status_id: 2,
          evidence: 'evidence',
          date_modified: 'date'
        },
        {
          id: 6,
          student_id: 3,
          assessment_id: 2,
          status_id: 1,
          evidence: 'evidence',
          date_modified: 'date'
        }
      ])
    })
}
