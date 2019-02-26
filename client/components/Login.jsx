import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signin } from '../actions/auth'
// import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button'

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

  handleChange (e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    const user = this.state
    this.props.dispatch(signin(user))
    this.setState({
      name: '',
      surname: '',
      password: '' })
    e.preventDefault()
  }

  render () {
    if (this.props.auth.loggedIn) {
      return <Redirect to='/' />
    }

    const { name, surname, password } = this.state
    return (
      <div className='signin'>
        <div>
         Firstname:  <input id='firstname' name='name' placeholder='firstname' onChange={this.handleChange} value={name} />
        </div>
        <div>
          Lastname: <input id='lastname' name='surname' placeholder='lastname' onChange={this.handleChange} value={surname} />
        </div>
        <div>
          Password: <input id='password' name='password' placeholder='password' onChange={this.handleChange} value={password} type='password'/>
        </div>
        <button name='signinBtn' id='signinBtn' onClick={this.handleSubmit}>Sign in</button>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps)(Login)
