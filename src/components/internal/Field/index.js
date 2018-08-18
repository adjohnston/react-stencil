import React from 'react'
import PropTypes from 'prop-types'

export const inputType = ({ type, value, prop, onChange }) => {
  const changeHandler = onChange(prop)

  switch (type) {
    case 'string':
      return <input type="text" onChange={changeHandler} value={value} />

    case 'number':
      return <input type="number" onChange={changeHandler} value={value} />

    case 'boolean':
      return (
        <input
          type="checkbox"
          onChange={changeHandler}
          checked={value && 'checked'}
        />
      )

    default:
      return <div>function</div>
  }
}

const Field = (props) => {
  return (
    <label>
      <span>{props.prop}</span>
      {inputType(props)}
    </label>
  )
}

Field.propTypes = {
  onChange: PropTypes.func.isRequired,
  prop: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.func,
  ]).isRequired,
}

export { Field }
