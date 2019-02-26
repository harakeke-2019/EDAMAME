import React from 'react'
import {connect} from 'react-redux'

import {register, registerError} from '../actions/auth'

export class Register extends React.Component {
    state = {
      name: '',
      surname: '',
      password: '',
      role: '',
      cohort: ''
    }

  registering = () => {
    const { name, surname, password } = this.state

    if(!name) {
      return this.props.dispatch(registerFailure('Must provide name.'))
    }
    if(!surname) {
      return this.props.dispatch(registerFailure('Must provide surname.'))
    }
    if(!password) {
      return this.props.dispatch(registerFailure('Must provide email.'))
    }

    this.props.dispatch(register({name, surname, password}))

    this.setState({
      name: '',
      surname: '',
      password: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    return (
      <form>
        <label htmlFor='name'>First name</label>
        <input 
          type='text' 
          placeholder='First name' 
          name='name'
          className='u-full-width'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor='surname'>Surname</label>
        <input 
          type='text' 
          placeholder='Last name' 
          name='surname'
          className='u-full-width'
          value={this.state.surname}
          onChange={this.handleChange}
        />
        <input 
          type='password' 
          placeholder='Password' 
          name='password'
          className='u-full-width'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <label htmlFor='role'>Role</label>
        <select placeholder='Are you a student or a teacher?' name='role'
          className='u-full-width'
          value={this.state.role}
          onChange={this.handleChange}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        {/* cohort will be a drop down box */}
        <label htmlFor='cohort'>Cohort</label>
        <input type='text' name='cohort' placeholder='Your cohort'
          className='u-full-width'
          value={this.state.cohor}
          onChange={this.handleChange}
        /> 
        <button 
          type='submit' 
          className='button-primary' 
          value='Add' 
          onClick={this.registering}
          >
        Register</button>
      </form>
    )
  }
}

const mapStateToProps = ({auth}) => ({auth})
export default connect(mapStateToProps)(Register)
