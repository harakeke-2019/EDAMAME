import React from 'react'
import ReactDOM from 'react-dom'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'

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

  handleSubmit (evt) {
    this.props.saveItem(this.state)
    this.setState(this.state)
    evt.preventDefault()
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  resetForm (evt) {
    this.setState({
      item: this.state,
      invalid: {}
    })
    evt && evt.preventDefault()
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
                <br/>
                <br/>
                <TextField
                  variant="outlined"
                  label="First name"
                  name='name'
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <br/>
                <br/>
                <TextField
                  variant="outlined"
                  label="Last name"
                  name='surname'
                  value={this.state.surname}
                  onChange={this.handleChange}
                />
                <br/>
                <br/>
                <TextField
                  variant="outlined"
                  type='password'
                  label="Password"
                  name='password'
                  className='u-full-width'
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <br/>
                <br/>

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

                <br/>
                <br/>

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
                <br/>
                <br/>
                <br/>
                <button type='submit' className='button-primary' value='Add' onSubmit={this.handleSubmit}
                  onClick={this.resetForm}>Register</button>
                <br/>
                <br/>
                <br/>
              </form>

            </Paper>
        </Grid>
      </Grid>

    )
  }
}

export default Register

