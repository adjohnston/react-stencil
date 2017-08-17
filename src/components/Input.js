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
        onChange={handleOnChange}
        placeholder={`Change '${name}' prop value...`} />
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
      <label
        className={classString('__checkbox-label')}>
        <input
          type='checkbox'
          checked={value}
          className={classString('__checkbox')}
          onChange={handleOnChange} />
        {value ? `'${name}' is true` : `'${name}' is false`}
      </label>
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

export { handleInputOnChange }
export default Input
