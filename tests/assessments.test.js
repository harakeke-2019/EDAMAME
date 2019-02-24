const request = require('supertest')

const seedData =[
  { id: 1,
  module_id: 1,
  title: "1. Use Git and terminal commands to manage a code base",
  description: "desc",
  link: "link",
  week_day: "weekday",
  student_id: 1,
  assessment_id: 1,
  status_id: 4,
  evidence: "evidence",
  date_modified: "date"},

  { id: 2,
  module_id: 1,
  title: "2. Use npm to manage library dependencies",
  description: "desc",
  link: "link",
  week_day: "weekday",
  student_id: 1,
  assessment_id: 2,
  status_id: 3,
  evidence: "evidence",
  date_modified: "date"}
]

jest.mock('../server/db/assessmentsDb.js',()=>({
  getAssessmentsById:() => Promise.resolve({id: 1,
    module_id: 1,
    title: "1. Use Git and terminal commands to manage a code base",
    description: "desc",
    link: "link",
    week_day: "weekday",
    student_id: 1,
    assessment_id: 1,
    status_id: 4,
    evidence: "evidence",
    date_modified: "date"})
}))

const server = require('../server/server')

test('GET assessments/:id', () => {
  return request(server)
    .get('/api/v1/assessments/1')
    .expect(200)
    .then((res) => {
      const expected = seedData[0].status_id
      const actual = res.body.status_id
      expect(expected).toBe(actual)
    })
    .catch(err => expect(err).toBeNull())
})
