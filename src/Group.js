import React from 'react'
import { Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const Group = ({name, description, onDelete}) => (
  <Card>
    <CardHeader
      title={name}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
      <FlatButton label="People" />
      <FlatButton label="Events" />
      <RaisedButton
        label="Delete"
        secondary={true}
        onClick={onDelete}
      />
    </CardActions>
    <CardText expandable={true}>
      {description}
    </CardText>
  </Card>
)

export default Group
