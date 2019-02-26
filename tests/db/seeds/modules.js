exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('modules').del()
    .then(function () {
      // Inserts seed entries
      return knex('modules').insert([
        {id: 1, title: 'Module 1: Core Programming'},
        {id: 2, title: 'Module 2: Web development'},
        {id: 3, title: 'Module 3: Teamwork & Leadership'},
        {id: 4, title: 'Module 4: Human Skills'}
      ])
    })
}
