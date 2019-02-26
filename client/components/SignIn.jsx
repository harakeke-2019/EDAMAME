import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

class SignIn extends React.Component() {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <TextField
          varient="outlined"
          label="firstname"
        />
        <TextField
          varient="outlined"
          label="lastname" />
        <TextField
          varient="outlined"
          label="password" />
        <Button variant="contained" color="primary" >
          Login
      </Button>
      </div>
    )
  }
}

export default SignIn 