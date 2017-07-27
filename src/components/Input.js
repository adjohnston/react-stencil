import React from 'react'
import PropTypes from 'prop-types'
import classString from 'helpers/class-string'
import transformValue from 'helpers/transform-value'

const Input = ({name, type, onChange, value}) => {
  const handleOnChange = ({ target: { value } }) => {
    return onChange(name, transformValue(value, type))
  }

  const handleOnToggle = ({ target: { checked } }) => {
    return onChange(name, transformValue(checked, type))
  }

  let inputElement
  if (type === 'string') {
    inputElement = (
      <input
        type='text'
        value={value}
        className={classString('__input')}
        onChange={handleOnChange} />
    )
  }

  if (type === 'number') {
    inputElement = (
      <input
        type='number'
        value={value}
        className={classString('__input')}
        onChange={handleOnChange} />
    )
  }

  if (type === 'bool') {
    inputElement = (
      <input
        type='checkbox'
        checked={value}
        className={classString('__checkbox')}
        onChange={handleOnToggle} />
    )
  }

  return inputElement || null
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'string',
    'number',
    'bool'
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ])
}

export default Input
