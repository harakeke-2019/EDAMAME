import React from 'react'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      surname: '',
      hash: '',
      role: '',
      cohort: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (evt) {
    this.props.saveItem(this.state)
    this.setState(this.state)
    evt.preventDefault()
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  resetForm (evt) {
    this.setState({
      item: this.state,
      invalid: {}
    })
    evt && evt.preventDefault()
  }

  render () {
    return (
      <form>
        <label>First name</label>
        <br/>
        <input type='text' placeholder='First name' name='name'
          className='u-full-width'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br/>
        <br/>
        <label>Surname</label>
        <br/>
        <input type='text' placeholder='Last name' name='surname'
          className='u-full-width'
          value={this.state.surname}
          onChange={this.handleChange}
        />
        <br/>
        <br/>
        <label>Hash</label>
        <br/>
        <input type='password' placeholder='Password' name='password'
          className='u-full-width'
          value={this.state.hash}
          onChange={this.handleChange}
        />
        <br/>
        <br/>
        <label>Role</label>
        <br/>
        <select placeholder='Are you a student or a teacher?' name='role'
          className='u-full-width'
          value={this.state.role}
          onChange={this.handleChange}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <br/>
        <br/>
        <label>Cohort</label>
        <br/>
        <input type='text' name='cohort' placeholder='Your cohort'
          className='u-full-width'
          value={this.state.cohort}
          onChange={this.handleChange}
        />
        <br/>
        <button type='submit' className='button-primary' value='Add' onSubmit={this.handleSubmit}
          onClick={this.resetForm}>Register</button>
      </form>
    )
  }
}

export default Register
