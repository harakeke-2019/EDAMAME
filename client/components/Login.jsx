import React from 'react'

export default function Login() {
  return (
    <div>
      <h1 className="login">Login</h1>
      <form className="form" action="#">
        <span>Username </span>
        <input type="text" name="username" />
        <br />
        <br />
        <span>Password </span>
        <input type="text" name="password" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
