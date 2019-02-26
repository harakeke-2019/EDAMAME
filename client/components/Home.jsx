import React from 'react'
import {Link} from 'react-router-dom'

export default function Home () {
  return (
    <React.Fragment>
      <div className="home">
        <h1>Welcome to Edamame</h1>
        <div className="link">
          <Link to="/register">Register</Link>
        </div>
        <br />
        <div className="link">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </React.Fragment>
  )
}
