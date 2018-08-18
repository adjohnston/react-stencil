import React from 'react'
import PropTypes from 'prop-types'

import { Field } from '../../Field'

const PropsList = ({ props }) => {
  return (
    <ul>
      {Object.keys(props).map((prop) => (
        <li key={prop}>
          <Field prop={prop} value={props[prop]} type={typeof props[prop]} />
        </li>
      ))}
    </ul>
  )
}

PropsList.propTypes = {
  props: PropTypes.object.isRequired,
}

export { PropsList as InternalPropsList }
