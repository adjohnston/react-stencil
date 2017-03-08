import React, { PropTypes } from 'react'
import Subtitle from 'components/styled/Subtitle'
import {
  List,
  Item
} from 'components/styled/List'

//    requiredProp : [string|object] -> element
const requiredProp = prop => (
  typeof prop === 'object' ? (
    <b>{prop[0]}</b>
  ) : prop
)

const Props = ({
  props,
  setProp
}) => props && (
  <section>
    <Subtitle>
      Props
    </Subtitle>

    <List>
      {Object.keys(props).map(prop => (
        <Item
          key={prop}>
          {prop}: {requiredProp(props[prop])}<br />
          <input
            onChange={(e) => setProp(prop, e.target.value)} />
        </Item>
      ))}
    </List>
  </section>
) || null

Props.propTypes = {
  props: PropTypes.object
}

export default Props
