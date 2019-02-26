import React from 'react'
// import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signin } from '../actions/auth'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      surname: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render () {
    // if (this.props.auth.loggedIn) {
    //   return <Redirect to='/' />
    // }

    const { name, surname, password } = this.state
    return (
      <div className='signin'>
        <TextField id='firstname' name='name' placeholder='firstname' onChange={this.handleChange} value={name} />
        <TextField id='lastname' name='surname' placeholder='lastname' onChange={this.handleChange} value={surname} />
        <TextField id='password' name='password' placeholder='password' onChange={this.handleChange} value={password} type='password'/>
        <Button name='signinBtn' id='signinBtn' onClick={this.handleSubmit}>Sign in</Button>
      </div>
    )
  }

  handleChange (e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    const user = this.state
    this.props.dispatch(signin(user))
    e.preventDefault()
  }
}

// const mapStateToProps = ({ auth }) => ({ auth })
export default connect()(Login)
