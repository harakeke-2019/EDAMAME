import React from 'react'
import CircularProgressbar from 'react-circular-progressbar'

export default function ProgressModule(props) {
  
  return (
    <React.Fragment>
      <CircularProgressbar percentage={props.percentage} text={`${props.percentage}%`} />
    </React.Fragment>
  )
}
