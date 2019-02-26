import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Evidence = () => {
  return (
    <React.Fragment>
      <center>
        <h1 className="eveTitle">Assessment 1</h1>
        <h3 className="eveSub">Assessment Description</h3>
        <p className="eveDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt id tenetur recusandae nemo blanditiis vel amet sequi commodi delectus sint obcaecati dolores aut itaque provident, illo deleniti iusto sunt vitae.
        </p>
        <hr className="eveLine" />
        <h4 className="eveLinks">Exercise to complete this assessment:</h4>
      </center>
      <ul className="ul1">
        <li><a href="#">Taxonomic Routing</a></li>
        <li><a href="#">Taxonomic Routing</a></li>
      </ul>

      <TextField
        id="outlined-full-width"
        label="Evidence of completion"
        style={{padding: 10}}
        placeholder="Link to your github repo here"
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
      />
      <center>
        <Button variant="contained" color="primary">
        SUBMIT
        </Button>
      </center>
    </React.Fragment>
  )
}

export default Evidence
