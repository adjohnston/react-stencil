import React from 'react'
import PropTypes from 'prop-types'
import classString from 'src/helpers/class-string'
import Input from 'src/components/Input'

const Prop = ({name, defs = {}, ...restProps}) => {
  const {
    type,
    required,
    description
  } = defs

  let typeElement
  if (type) {
    typeElement = (
      <span
        className={classString('__prop-type')}>
        ({type})
      </span>
    )
  } else {
    typeElement = (
      <span
        className={classString('__prop-type-missing')}>
        Missing type
      </span>
    )
  }

  let requiredElement
  if (required) {
    requiredElement = (
      <span
        className={classString('__prop-required')}>
        Required
      </span>
    )
  }

  let descriptionElement
  if (description) {
    descriptionElement = (
      <div>
        {description}
      </div>
    )
  }

  let inputElement
  if (type === 'string' || type === 'number' || type === 'bool') {
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
        {typeElement}

        {requiredElement}
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
