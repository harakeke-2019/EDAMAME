import React from 'react'
import { connect } from 'react-redux'

class SignIn extends React.Component {
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
    const { firstname, lastname, password } = this.state
    return (
      <div className='signin'>
        <form className='signinForm'>
          <input id='username' name='firstname' placeholder='firstname' onChange={this.handleChange} value={name} />
          <input id='username' name='lastname' placeholder='lastname' onChange={this.handleChange} value={surname} />
          <input id='password' name='password' placeholder='password' onChange={this.handleChange} value={password} type='password'/>
          <button name='signinBtn' id='signinBtn' onClick={this.handleSubmit}>Sign in</button>
        </form>
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
    const { username, password } = this.state
    const goToEvents = () => this.props.history.push('/events')
    this.props.signIn(username, password, goToEvents)
    e.preventDefault()
  }
}

export default SignIn
