const request = require('supertest')

const seedData = [
  {id: 1, name: 'Harakeke', year: '2019', campus: 'Auckland'},
  {id: 2, name: 'Kauri', year: '2019', campus: 'Auckland'}
]

jest.mock('../../server/db/cohorts.js', () => ({
  getCohort: () => Promise.resolve({id: 2, name: 'Kauri', year: '2019', campus: 'Auckland'})
}))

const server = require('../../server/server')

test('GET chorts/:id', () => {
  return request(server)
    .get('/api/v1/cohorts/2')
    .expect(200)
    .then((res) => {
      const expected = seedData[1].name
      const actual = res.body.name
      expect(expected).toBe(actual)
    })
    .catch(err => expect(err).toBeNull())
})
