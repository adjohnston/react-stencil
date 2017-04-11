import React, { Component } from 'react'
import PropTypes from 'prop-types'

const isType = (propType, type) => propType === type
const isRequired = propType => typeof propType === 'object' ? true : false
const type = prop => isRequired(prop) ? prop[0] : prop

class Types extends Component {
  inputElement(typeName, prop) {
    const {
      state,
      setProp
    } = this.props

    let inputElement
    if (isType(prop, 'string') || isType(prop, 'number')) {
      inputElement = (
        <input
          type="text"
          value={state[typeName]}
          onChange={({target: {value}}) => {
            setProp(typeName, isType(prop, 'number') ? Number(value) : value)
          }} />
      )
    }

    if (prop === 'bool') {
      inputElement = (
        <input
          type="checkbox"
          checked={state[typeName]}
          onClick={({target: {checked}}) => setProp(typeName, checked)} />
      )
    }

    return inputElement || null
  }

  render() {
    const types = this.props.types
    return types && (
      <section>
        <h2>
          Types
        </h2>

        <ul>
          {Object.keys(types).map(typeName => {
            const props = types[typeName]['props']
            const desc = types[typeName].description

            const propsElement = (
              <span>
                <b>{typeName}</b><br />
              </span>
            )

            const descElement = (
              <div>
                <i>{desc}</i>
              </div>
            )

            return (
              <li
                key={typeName}>
                {propsElement}
                {this.inputElement(typeName, props[0])}
                {descElement}
              </li>
            )
          })}
        </ul>
      </section>
    ) || null
  }
}

Types.propTypes = {
  setProp: PropTypes.func.isRequired
}

export default Types
