import React from 'react'

export default function Header (props) {
  const {firstName, lastName, cohort} = props.student

  return (
    <div className="header">
      <h1>Hi {firstName} {lastName}</h1>
      <h3>Cohort: {cohort}</h3>
    </div>
  )
}
