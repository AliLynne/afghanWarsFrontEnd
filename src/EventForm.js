import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class EventForm extends Component {
  render() {
    return(
      <div>
        <TextField
          floatingLabelText="Add a new Event"
        />
        <br />
        <RaisedButton label="Save" primary={true} />
      </div>
    )
  }
}

export default EventForm
