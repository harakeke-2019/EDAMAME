const server = require('../server/server')
const request = require('supertest')

test('All systems are go', () => {
  expect(true).toBeTruthy()
})

test('First title comes back', (done) => {
  const expected = '1. Use Git and terminal commands to manage a code base'

  request(server)
    .get('/api/v1/assessments/1')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.body.title).toBe(expected)
      done()
    })
})