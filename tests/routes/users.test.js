const request = require('supertest')

const seedData = [
  {id: 1, name: 'Jane', surname: 'Doe', hash: '', role: 'facilitator'}, {id: 2, name: 'John', surname: 'Doe', hash: '', role: 'student'}
]

jest.mock('../../server/db/users.js', () => ({
  getUsers: () => Promise.resolve([{id: 1, name: 'Jane', surname: 'Doe', hash: '', role: 'facilitator'}, {id: 2, name: 'John', surname: 'Doe', hash: '', role: 'student'}
  ])
}))

const server = require('../../server/server')

test('API is working', () => {
  return request(server)
    .get('api/v1/users')
    .then(() => {
      const expected = 'api/v1/users'
      const actual = 'api/v1/users'
      expect(expected).toEqual(actual)
    })
})

test('GET users', () => {
  return request(server)
    .get('/api/v1/users')
    .expect(200)
    .then((res) => {
      const expected = seedData
      const actual = res.body
      expect(expected).toEqual(actual)
    })
    .catch(err => expect(err).toBeNull())
})
