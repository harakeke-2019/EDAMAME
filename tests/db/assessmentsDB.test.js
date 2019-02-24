const testEnv = require('./test-environment')
const db = require('../../server/db/assessments')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('updateEvidence updates evidence and date in student_assignment db', () => {
  const newEvidence = {
    evidence: 'new evidence3',
    date: '2019-01-23 09:30:05',
    studentId : 2
  }
  const id = 3

  return db
    .updateEvidence(id, newEvidence, testDb)
    .then(updated => expect(updated).toBe(1))
})
