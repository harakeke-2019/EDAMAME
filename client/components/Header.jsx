import React from 'react'

export default function Header(props) {
  const { name, surname, cohort } = props.student

  return (
    <div className="header">
      <h1>Name: {name.name}</h1>
      <h1>Surname: {surname.surname}</h1>
      <h3>Cohort: {cohort.cohort}</h3>
    </div>
  )
}
