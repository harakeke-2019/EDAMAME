import React from 'react'
import CircularProgressbar from 'react-circular-progressbar'

export default function ProgressModule(props) {
  const percentage = props.placeHolderProps.tally
  return (
    <React.Fragment>
      <CircularProgressbar percentage={percentage} text={`${percentage}%`} />
    </React.Fragment>
  )
}
