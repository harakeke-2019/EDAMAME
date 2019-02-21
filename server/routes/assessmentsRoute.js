const express = require('express')

const assessmentsRouter = express.Router()

router.get('/assessments/:id', (req, res) => {
  const id = req.params.id
  
})


router.put ('/assessments/:id',(req,res)=>{
  const assessmentID = req.params.id
  const evidence = req.body.evidence

  db.updateEvidence(assessmentID,evidence)
    .catch(err =>res.status(500).json({error: 'Fail to add evidence to assesment!'}))
})

module.exports = assessmentsRouter