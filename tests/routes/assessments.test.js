const server = require('../../server/server')
const request = require('supertest')
const cheerio = require('cheerio')

test('Test testing environment', () => {
  expect(true).toBeTruthy()
})

test('index route loads correctly', done => {
  request(server)
    .put('/4')
    .send({
      "evidence" : "new evidence3",
      "date" : "2019-01-24"
    })
    .expect(202)
    .end((err, res)=>{
      expect(res.body).toBe({
        "notice": "Evidence has been updated!"
    })
      done()
    })
})
