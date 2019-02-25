import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

export default function SignIn() {
  return (
    <div>
      <h1>SIGN IN COMPONENT</h1>
      <TextField
        varient="outlined"
        label="firstname" />
      <TextField
        varient="outlined"
        label="lastname" />
      <TextField
        varient="outlined"
        label="password" />
      <Button variant="contained" color="primary">
        Login
      </Button>
    </div>
  )
}
