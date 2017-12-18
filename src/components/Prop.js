import React from 'react'
import PropTypes from 'prop-types'
import Input from 'src/components/Input'

const Prop = ({name, defs = {}, ...restProps}) => {
  const {
    type,
    required,
    description
  } = defs

  let descriptionElement
  if (description) {
    descriptionElement = (
      <div>
        {description}
      </div>
    )
  }

  let inputElement
  if (type) {
    inputElement = (
      <Input
        type={type}
        name={name}
        {...restProps} />
    )
  }

  return (
    <li>
      <div>
        {name}
      </div>

      <div>
        <b>{type}</b>
        {required ? <i> - is required</i> : null}
      </div>

      {descriptionElement}
      {inputElement}
    </li>
  )
}

Prop.propTypes = {
  name: PropTypes.string.isRequired,
  defs: PropTypes.shape({
    type: PropTypes.string.isRequired,
    required: PropTypes.bool,
    defaultValue: PropTypes.node,
    description: PropTypes.string
  }).isRequired,
  restProps: PropTypes.object
}

export default Prop
