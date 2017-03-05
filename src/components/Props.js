import React, { PropTypes } from 'react'
import Subtitle from 'components/styled/Subtitle'

const Props = ({props}) => props && (
  <section>
    <Subtitle>
      Props
    </Subtitle>

    <ul>
      {Object.keys(props).map(prop => (
        <li
          key={prop}>
          {prop}: {props[prop]}
        </li>
      ))}
    </ul>
  </section>
) || null

Props.propTypes = {
  props: PropTypes.object
}

export default Props
