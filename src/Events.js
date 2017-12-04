import React, {Component} from 'react'
import EventForm from './EventForm'
import Event from './Event'


class Events extends Component {
  render() {
    return(
      <div className="container">
        <h3>Events</h3>
        <EventForm />
        <Event />
        <Event />
        <Event />
      </div>
    )
  }
}

export default Events
