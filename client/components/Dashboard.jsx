import React from 'react'
import {connect} from 'react-redux'

import {register, registerError} from '../actions/auth'

class Register extends React.Component {
    state = {
      name: '',
      surname: '',
      hash: ''
      // role: '',
      // cohort: ''
    }

  register = () => {
    const {name, surname, hash} = this.state

    if(!name) {
      return this.props.dispatch(registerError('User must provide name'))
    }
    if(!surname) {
      return this.props.dispatch(registerError('User must provide surname'))
    }
    if(!hash) {
      return this.props.dispatch(registerError('User must provide hash'))
    }

    this.props.dispatch(register(name, surname, hash))

    this.setState({
      name: '',
      surname: '',
      hash: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    console.log(this.state)
    return (
      <form>
        <label htmlFor='name'>First name</label>
        <br/>
        <input 
          type='text' 
          placeholder='First name' 
          name='name'
          className='u-full-width'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br/>
        <br/>
        <label htmlFor='surname'>Surname</label>
        <br/>
        <input 
          type='text' 
          placeholder='Last name' 
          name='surname'
          className='u-full-width'
          value={this.state.surname}
          onChange={this.handleChange}
        />
        <br/>
        <br/>
        <label htmlFor='hash'>Hash</label>
        <br/>
        <input 
          type='password' 
          placeholder='Password' 
          name='password'
          className='u-full-width'
          value={this.state.hash}
          onChange={this.handleChange}
        />
        <br/>
        <br/>
        {/* <label htmlFor='role'>Role</label>
        <br/>
        <input type='text' placeholder='Are you a student or a teacher?' name='role'
          className='u-full-width'
          value={this.state.role}
          onChange={this.handleChange}
        />
        <br/>
        <br/>
        {/* cohort will be a drop down box */}
        {/* <label htmlFor='cohort'>Cohort</label>
        <br/>
        <input type='text' name='cohort' placeholder='Your cohort'
          className='u-full-width'
          value={this.state.cohor}
          onChange={this.handleChange}
        />  */}
        <br/>
        <button 
          type='submit' 
          className='button-primary' 
          value='Add' 
          onClick={this.register}
          >
        Register</button>
      </form>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps(Register))