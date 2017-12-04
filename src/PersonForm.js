import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class PersonForm extends Component {
  render() {
    return(
      <div>
        <TextField
          floatingLabelText="Add a new person"
        />
        <br />
        <RaisedButton label="Save" primary={true} />
      </div>
    )
  }
}

export default PersonForm
