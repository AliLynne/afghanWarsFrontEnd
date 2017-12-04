import React, {Component} from 'react'
import PersonForm from './PersonForm'
import Person from './Person'


class People extends Component {
  render() {
    return(
      <div className="container">
        <h3>People</h3>
        <PersonForm />
        <Person />
        <Person />
        <Person />
      </div>
    )
  }
}

export default People
