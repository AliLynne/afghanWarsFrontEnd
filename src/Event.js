import React from 'react'
import { Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const Event = () => (
  <Card>
    <CardHeader
      title="Event Name"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
      <FlatButton label="People" />
      <FlatButton label="Groups" />
    </CardActions>
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
     Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
     Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
   </CardText>
  </Card>
)

export default Event
