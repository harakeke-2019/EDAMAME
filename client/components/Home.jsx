import React from 'react'
import {Link} from 'react-router-dom'

export default function Home () {
  return (
    <React.Fragment>
      <Link to="/register" >Register</Link>
      <Link to="/login" >Login</Link>
    </React.Fragment>
  )
}
