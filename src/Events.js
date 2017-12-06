import React, {Component} from 'react'
import EventForm from './EventForm'
import Event from './Event'
const APIURL = '/api/events'


class Events extends Component {
  constructor(props){
    super(props)
    this.state = {
      events: []
    }
  }
  componentWillMount(){
    this.loadEvents()
  }
  loadEvents(){
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
    .then(events => this.setState({events}))
  }
  render() {
    const events = this.state.events.map((e) => (
      <Event
        key={e._id}
        {...e}
      />
    ))
    return(
      <div className="container">
        <h3>Events</h3>
        <EventForm />
        {events}
      </div>
    )
  }
}

export default Events
