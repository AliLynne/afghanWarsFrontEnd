import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class GroupForm extends Component {
  constructor(props){
    super(props)
    this.state = {inputValue: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }
  handleSubmit(){
    this.props.addGroup(this.state.inputValue)
  }
  render() {
    return(
      <div>
        <TextField
          value={this.state.inputValue}
          floatingLabelText="Add a new Group"
          hintText="Group name"
          onChange={this.handleChange}
        />
        <RaisedButton
          label="Save"
          primary={true}
          onClick={this.handleSubmit}
        />
      </div>
    )
  }
}

export default GroupForm
