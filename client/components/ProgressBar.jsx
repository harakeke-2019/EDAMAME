import React from 'react'
import {ProgressBar as Bar} from 'react-bootstrap'

export default function ProgressBar (props) {
  const divStyle = {
    width: '50%',
    margin: 'auto'
  }
  const percentage = props.placeHolderFromModule

  return (
    <React.Fragment>
      <Bar style={divStyle}>
        <Bar striped variant="success" now={{percentage}} key={1} />
        <Bar variant="warning" now={{percentage}} key={2} />
        <Bar striped variant="danger" now={{percentage}} key={3} />
        <Bar striped variant="info" now={{percentage}} key={3} />
      </Bar>
    </React.Fragment>
  )
}
