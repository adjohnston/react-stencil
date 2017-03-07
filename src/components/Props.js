import React, { PropTypes } from 'react'
import Subtitle from 'components/styled/Subtitle'

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

    <ul>
      {Object.keys(props).map(prop => (
        <li
          key={prop}>
          {prop}: {requiredProp(props[prop])}<br />
          <input
            onChange={(e) => setProp(prop, e.target.value)} />
        </li>
      ))}
    </ul>
  </section>
) || null

Props.propTypes = {
  props: PropTypes.object
}

export default Props
