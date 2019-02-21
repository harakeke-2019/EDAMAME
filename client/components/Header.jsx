import React from 'react'

export default function Header (props) {
  const {name, surname, cohort} = props.student

  return (
    <div className="header">
      <h1>Name: {name}</h1>
      <h1>Surname: {surname}</h1>
      <h3>Cohort: {cohort}</h3>
    </div>
  )
}
