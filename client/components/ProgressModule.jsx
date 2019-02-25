import React from 'react'
import CircularProgressbar from 'react-circular-progressbar'

export default function ProgressModule (props) {
  return (
    <React.Fragment>
      <div>
        <CircularProgressbar percentage={props.percentage} text={`${props.percentage}%`} />
      </div>
    </React.Fragment>

  )
}
