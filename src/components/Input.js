import React from 'react'
import PropTypes from 'prop-types'
import className from 'helpers/class-name'
import transformValue from 'helpers/transform-value'

const Input = ({name, type, onChange, value}) => {
  const handleOnChange = ({target: {value}}) => {
    return onChange(name, transformValue(value, type))
  }

  if (type === 'func') {
    return null
  }

  let inputEl
  if (type === 'string') {
    inputEl = (
      <input
        type='text'
        value={value}
        className={className('input')}
        onChange={handleOnChange} />
    )
  }

  if (type === 'number') {
    inputEl = (
      <input
        type='number'
        value={value}
        className={className('input')}
        onChange={handleOnChange} />
    )
  }

  return inputEl || null
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array
  ]).isRequired
}

export default Input
