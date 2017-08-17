import React from 'react'
import PropTypes from 'prop-types'
import classString from 'src/helpers/class-string'
import kebabCase from 'src/helpers/kebab-case'
import Input from 'src/components/Input'
import HeadingAnchor from 'src/components/HeadingAnchor'

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
      <p
        className={classString('__p')}>
        {description}
      </p>
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
    <li
      className={`${classString('__list-item')} ${classString('__prop-list-item')}`}>
      <h3
        className={classString('__prop-heading')}>
        <HeadingAnchor
          anchorId={`prop-${kebabCase(name)}`} />
        <code
          className={classString('__prop-name')}>
          {name}
        </code>

        {typeElement}

        {requiredElement}
      </h3>

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
