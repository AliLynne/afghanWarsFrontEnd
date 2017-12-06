import React from 'react'
import { Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const Person = ({name, description}) => (
  <Card>
    <CardHeader
      title={name}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
      <FlatButton label="Groups" />
      <FlatButton label="Events" />
    </CardActions>
    <CardText expandable={true}>
      {description}
    </CardText>
  </Card>
)

export default Person
