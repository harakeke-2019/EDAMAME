import React from 'react'
import {connect} from 'react-redux'
import {saveEvidence} from '../actions/evidence'
import {Redirect} from 'react-router-dom'

class Evidence extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      evidence: '',
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit () {
    this.props.dispatch(saveEvidence(this.state.evidence, this.props.id))
    this.setState({
      submitted: true
    })
  }

  // assume we are passed evidence info in props
  render () {
    if (this.state.submitted) {
      return <Redirect to='/'/>
    }
    return (
      <div>
        <h1>{this.props.title}</h1>
        <form>
          <p>Evidence of completion</p>
          <input type='text' value={this.state.evidence} name='evidence' onChange={this.handleChange}/>
          <button type='submit' className='button-primary' value='' onClick={this.handleSubmit}> Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(Evidence)
