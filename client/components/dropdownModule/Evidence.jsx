import React from 'react'
import TextField from '@material-ui/core/TextField'

class OutlinedTextFields extends React.Component {
  state = {
    evidence: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    // return (
    //   <form className={classes.container} noValidate autoComplete="off">
    //     <TextField
    //       id="outlined-name"
    //       label="Name"
    //       className={classes.textField}
    //       value={this.state.name}
    //       onChange={this.handleChange('name')}
    //       margin="normal"
    //       variant="outlined"
    //     />

const Evidence = () => {
  return (
    <React.Fragment>
      <h1>Exercise 1</h1>
      <h3>Exercise Description</h3>
      <h4>Descrition...</h4>
      <form>
      <TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Link to your github repo here"
          helperText="Full width!"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <input type="text" name="evidence" placeholder="Link to your github repo here"></input>
    </React.Fragment>
  )
}

export default Evidence
