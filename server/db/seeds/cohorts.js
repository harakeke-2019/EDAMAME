exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {id: 1,
          name: 'Harakeke',
          year: 2019,
          campus: 'Auckland'}
      ])
    })
}
