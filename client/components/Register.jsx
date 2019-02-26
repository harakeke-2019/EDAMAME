import React from 'react'
import ReactDOM from 'react-dom'
import { Paper,
  Grid,
  TextField,
  OutlinedInput,
  FormControl,
  Select,
  MenuItem,
  InputLabel } from '@material-ui/core'

import {connect} from 'react-redux'
import {register, registerError} from '../actions/auth'

class Register extends React.Component {
  state = {
    name: '',
    surname: '',
    password: '',
    role: '',
    cohort: '',
    labelWidth: 0
  }
  
  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    })
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

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render () {
    const styles = {
      paper: {
        textAlign: 'center',
        color: 'grey'
      }
    }
    
    return (
      <Grid>
        <Grid item xs={6}>
          <Paper style={styles.paper} >
            <h1>Register</h1>
              <form >
                <TextField
                  variant="outlined"
                  label="First name"
                  name='name'
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <TextField
                  variant="outlined"
                  label="Last name"
                  name='surname'
                  value={this.state.surname}
                  onChange={this.handleChange}
                />
                <TextField
                  variant="outlined"
                  type='password'
                  label="Password"
                  name='password'
                  className='u-full-width'
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <FormControl variant="outlined" style={{minWidth: '200px'}} >
                  <InputLabel
                    ref={ref => {
                      this.InputLabelRef = ref 
                    }}
                    htmlFor="role"
                  >
                 Role
                  </InputLabel>
                  <Select
                    value={this.state.role}
                    onChange={this.handleChange}
                    input={
                      <OutlinedInput
                        labelWidth={this.state.labelWidth}
                        name='role'
                        id="role"
                      />
                    }
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Student'}>Student</MenuItem>
                    <MenuItem value={'Teacher'}>Teacher</MenuItem>
                  </Select>
                </FormControl>

                <FormControl variant="outlined" style={{minWidth: '200px'}} >
                  <InputLabel
                    ref={ref => {
                      this.InputLabelRef = ref // comeback to this
                    }}
                    htmlFor="Cohort"
                  >
                Cohort
                  </InputLabel>
                  <Select
                    value={this.state.cohort}
                    onChange={this.handleChange}
                    input={
                      <OutlinedInput
                        labelWidth={this.state.labelWidth}
                        name='cohort'
                        id="cohort"
                      />
                    }
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Harakeke2019'}>Harakeke2019</MenuItem>
                    <MenuItem value={'Kowhai2018'}>Kowhai2018</MenuItem>
                  </Select>
                </FormControl>
                <button 
                  type='submit' 
                  className='button-primary' 
                  value='Add' 
                  onClick={this.registering}
                  >Register</button>
              </form>
          </Paper>
        </Grid>
      </Grid>

    )
  }
}

const mapStateToProps = ({auth}) => ({auth})
export default connect(mapStateToProps)(Register)
