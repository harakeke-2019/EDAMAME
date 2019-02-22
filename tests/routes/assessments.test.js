const server = require('../../server/server')
const request = require('supertest')
const cheerio = require('cheerio')

test('Test testing environment', () => {
  expect(true).toBeTruthy()
})

test('Test PUT route "/api/v1/assessments/:id" ', done => {
  return request(server)
    .put('/api/v1/assessments/4')
    .send({
      "evidence" : "new evidence3",
      "date" : "2019-01-24"
    })
    .expect(202)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .then((res)=>{
     expect(res.body).toEqual({ notice: 'Evidence has been updated!'})
     done()
    })
    .catch(err => expect(err).toBeNull())
})
