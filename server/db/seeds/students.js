exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, user_id: 2, cohort_id: 1, first_name: 'John', last_name: 'Smith'}
      ])
    })
}
