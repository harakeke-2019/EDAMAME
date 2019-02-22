import React from 'react'

export default function signin () {
  return (
    <div>
      <h1 className="signin">signin</h1>
      <form className="form">
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
