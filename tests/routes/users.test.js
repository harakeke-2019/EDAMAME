const request = require('supertest')

const seedData = [
  {id: 1,
    name: 'Jane',
    surname: 'Doe',
    hash: '',
    role: 'facilitator'},
  {id: 2,
    name: 'John',
    surname: 'Doe',
    hash: '',
    role: 'student'}
]

jest.mock('../../server/db/db.js', () => ({
  getUsers: () => Promise.resolve({id: 1, name: 'Jane', surname: 'Doe', hash: '', role: 'facilitator'})
}))

const server = require('../../server/server')

test('GET users', () => {
  return request(server)
    .get('/api/v1/users')
    .expect(200)
    .then((res) => {
      const expected = seedData[1].name
      const actual = res.body.name
      expect(expected).toBe(actual)
    })
    .catch(err => expect(err).toBeNull())
})
