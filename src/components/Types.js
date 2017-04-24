import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { className } from 'helpers'

const isType = (propType, type) => propType === type

class Types extends Component {
  inputElement (typeName, prop) {
    const {
      state,
      setProp
    } = this.props

    let inputElement
    if (isType(prop, 'string') || isType(prop, 'number')) {
      inputElement = (
        <input
          type='text'
          value={state[typeName]}
          className={className('input')}
          onChange={({target: {value}}) => {
            setProp(typeName, isType(prop, 'number') ? Number(value) : value)
          }} />
      )
    }

    if (isType(prop, 'number')) {
      inputElement = (
        <input
          type='number'
          value={state[typeName]}
          className={className('input')}
          onChange={({target: {value}}) => {
            setProp(typeName, isType(prop, 'number') ? Number(value) : value)
          }} />
      )
    }

    if (prop === 'bool') {
      inputElement = (
        <input
          type='checkbox'
          checked={state[typeName]}
          className={className('input')}
          onClick={({target: {checked}}) => setProp(typeName, checked)} />
      )
    }

    return inputElement || null
  }

  render () {
    const types = this.props.types
    return (types && (
      <section>
        <h2
          className={className('title')}>
          Types
        </h2>

        <ul
          className={className('list')}>
          {Object.keys(types).map(typeName => {
            const {
              props,
              description
            } = types[typeName]

            const propsElement = (
              <span>
                <b>{typeName}{props && props[1] ? '*' : ''}</b><br />
              </span>
            )

            const descriptionElement = (
              <div>
                <i>{description}</i>
              </div>
            )

            return (
              <li
                key={typeName}
                className={className('list-item')}>
                {propsElement}
                {this.inputElement(typeName, props[0])}
                {descriptionElement}
              </li>
            )
          })}
        </ul>
      </section>
    )) || null
  }
}

Types.propTypes = {
  state: PropTypes.object.isRequired,
  types: PropTypes.object.isRequired,
  setProp: PropTypes.func.isRequired
}

export default Types
