import React from 'react'
import PropTypes from 'prop-types'
import classString from 'src/helpers/class-string'
import transformValue from 'src/helpers/transform-value'

const handleInputOnChange = (onChange, name, type) => ({ target }) => {
  return onChange(name, transformValue(
    (type === 'bool')
      ? target.checked
      : target.value
  ), type)
}

const Input = ({name, type, onChange, value}) => {
  const handleOnChange = handleInputOnChange(onChange, name, type)

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
        onChange={handleOnChange} />
    )
  }

  return inputElement || null
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ])
}

export { handleInputOnChange }
export default Input
