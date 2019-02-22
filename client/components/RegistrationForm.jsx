import React from 'react'

class RegistrationForm extends React.Component {
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
    this.setState({
      name: '',
      surname: '',
      hash: '',
      role: '',
      cohort: ''
    })
    evt.preventDefault()
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render () {
    return (
      <form>
        <label htmlFor='name'>First name</label>
        <br/>
        <input type='text' placeholder='First name' name='name'
          className='u-full-width'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br/>
        <br/>
        <label htmlFor='surname'>Surname</label>
        <br/>
        <input type='text' placeholder='Last name' name='surname'
          className='u-full-width'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br/>
        <br/>
        <label htmlFor='hash'>Hash</label>
        <br/>
        <input type='password' placeholder='Password' name='password'
          className='u-full-width'
          value={this.state.description}
          onChange={this.handleChange}
        />
        <br/>
        <br/>
        <label htmlFor='role'>Role</label>
        <br/>
        <input type='text' placeholder='Are you a student or a teacher?' name='role'
          className='u-full-width'
          value={this.state.description}
          onChange={this.handleChange}
        />
        <br/>
        <br/>
        {/* cohort will be a drop down box */}
        <label htmlFor='cohort'>Cohort</label>
        <br/>
        <input type='text' name='cohort' placeholder='Your cohort'
          className='u-full-width'
          value={this.state.description}
          onChange={this.handleChange}
        />
        <br/>
        <button type='submit'
          className='button-primary'
          value='Add'
          onClick={this.handleSubmit}
        >Register</button>
      </form>
    )
  }
}

export default RegistrationForm
