import React, {Component} from 'react'
import GroupForm from './GroupForm'
import Group from './Group'
import * as apiCalls from './api'
const APIURL = '/api/groups/'


class Groups extends Component {
  constructor(props){
    super(props)
    this.state = {
      groups: []
    }
  this.addGroup = this.addGroup.bind(this)
  }
  componentWillMount(){
    this.loadGroups()
  }
  async loadGroups(){
    let groups = await apiCalls.getGroups()
    .then(groups => this.setState({groups}))
  }

addGroup(val){
  fetch(APIURL, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({name: val})
  })
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
  .then(newGroup => {
    this.setState({groups: [...this.state.groups, newGroup]})
  })
}
deleteGroup(id){
  const deleteURL = APIURL + id
  fetch(deleteURL, {
    method: 'delete'
  })
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
  })
  .then(() => {
    const groups = this.state.groups.filter(group => group._id !== id)
    this.setState({groups: groups})
  })
}
  render() {
    const groups = this.state.groups.map((g) => (
      <Group
        key={g._id}
        {...g}
        onDelete={this.deleteGroup.bind(this,g._id)}
      />
    ))
    return(
      <div className="container">
        <h3>Groups</h3>
        <GroupForm addGroup={this.addGroup}/>
        {groups}
      </div>
    )
  }
}

export default Groups
