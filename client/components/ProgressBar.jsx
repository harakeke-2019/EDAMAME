import React from 'react'
import {ProgressBar as Bar} from 'react-bootstrap'

export default function ProgressBar (props) {
  const percentage1 = 10
  const percentage2 = 20
  const percentage3 = 30

  return (
    <React.Fragment>
      <h4>Cohort Progress</h4>
      <Bar>
        <Bar striped variant="success" now={percentage1} key={1} />
        <Bar variant="warning" now={percentage2} key={2} />
        <Bar striped variant="danger" now={percentage3} key={3} />
      </Bar>
    </React.Fragment>
  )
}
