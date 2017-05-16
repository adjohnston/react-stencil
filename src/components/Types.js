import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { className } from 'helpers'

const isPropType = (propType, type) => propType === type

class Types extends Component {
  inputElement (propTypeName, prop) {
    const {
      state,
      setProp
    } = this.props

    let inputElement
    if (isPropType(prop, 'string') || isPropType(prop, 'number')) {
      inputElement = (
        <input
          type='text'
          value={state[propTypeName]}
          className={className('input')}
          onChange={({target: {value}}) => {
            setProp(propTypeName, isPropType(prop, 'number') ? Number(value) : value)
          }} />
      )
    }

    if (isPropType(prop, 'number')) {
      inputElement = (
        <input
          type='number'
          value={state[propTypeName]}
          className={className('input')}
          onChange={({target: {value}}) => {
            setProp(propTypeName, isPropType(prop, 'number') ? Number(value) : value)
          }} />
      )
    }

    if (prop === 'bool') {
      inputElement = (
        <input
          type='checkbox'
          checked={state[propTypeName]}
          className={className('input')}
          onClick={({target: {checked}}) => setProp(propTypeName, checked)} />
      )
    }

    return inputElement || null
  }

  render () {
    const propDefs = this.props.propDefs
    return (propDefs && (
      <section>
        <h2
          className={className('title')}>
          Types
        </h2>

        <ul
          className={className('list')}>
          {Object.keys(propDefs).map(propTypeName => {
            const {
              props,
              description
            } = propDefs[propTypeName]

            const propsElement = (
              <span>
                <b>{propTypeName}{props && props[1] ? '*' : ''}</b><br />
              </span>
            )

            const descriptionElement = (
              <div>
                <i>{description}</i>
              </div>
            )

            return (
              <li
                key={propTypeName}
                className={className('list-item')}>
                {propsElement}
                {this.inputElement(propTypeName, props[0])}
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
  propDefs: PropTypes.object.isRequired,
  setProp: PropTypes.func.isRequired
}

export default Types
