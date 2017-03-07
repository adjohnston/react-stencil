import React, { PropTypes } from 'react'
import Subtitle from 'components/styled/Subtitle'
import {
  List,
  Item
} from 'components/styled/List'

const Props = ({props}) => props && (
  <section>
    <Subtitle>
      Props
    </Subtitle>

    <List>
      {Object.keys(props).map(prop => (
        <Item
          key={prop}>
          {prop}: {props[prop]}
        </Item>
      ))}
    </List>
  </section>
) || null

Props.propTypes = {
  props: PropTypes.object
}

export default Props
