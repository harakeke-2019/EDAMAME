const server = require('../server/routes')
const request = require('supertest')
const cheerio = require('cheerio')

test('All systems are go', () => {
  expect(true).toBeTruthy()
})


test('/assessments route works', (done) => {
  request(server)
    .get('/assessments/1')
    .expect(200)
    .expect('content-type', 'text/html; charset=utf-8')
    .end((err, res) => {
      expect(err).toBeNull()

      const $ = cheerio.load(res.text)
      const actual = $('h1').text()

      console.log(actual)

      expect(actual).toMatch('Turing')
      done()
    })
})