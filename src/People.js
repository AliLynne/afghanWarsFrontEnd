import React, {Component} from 'react'
import PersonForm from './PersonForm'
import Person from './Person'
const APIURL = './api/people'


class People extends Component {
  constructor(props){
    super(props)
    this.state = {
      people: []
    }
  }
  componentWillMount(){
    this.loadPeople()
  }
  loadPeople(){
    fetch(APIURL)
    .then(res => {
      if(!res.ok){
        if(res.status >= 400 && res.status < 500){
          return res.json().then(data => {
            let err = {errorMessage: data.message}
            throw err
          })
        } else {
          let err = {errorMessage: 'Please try again later, server is not responding.'}
          throw err
        }
      }
      return res.json()
  })
  .then(people => this.setState({people}))
  }
  render() {
    const people = this.state.people.map((p) => (
      <Person
        key={p._id}
        {...p}
      />
    ))
    return(
      <div className="container">
        <h3>People</h3>
        <PersonForm />
        {people}
      </div>
    )
  }
}

export default People
