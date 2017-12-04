import React, {Component} from 'react'
import PersonForm from './PersonForm'
import Person from './Person'


class People extends Component {
  render() {
    return(
      <div>
        <h1>People</h1>
        <PersonForm />
        <Person />
        <Person />
        <Person />
      </div>
    )
  }
}

export default People
