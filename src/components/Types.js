import React, { Component, PropTypes } from 'react'

const isType = (propType, type) => propType === type
const isRequired = propType => typeof propType === 'object' ? true : false
const type = prop => isRequired(prop) ? prop[0] : prop

class Types extends Component {
  inputElement(prop, propType) {
    const {
      state,
      setProp
    } = this.props

    let inputElement

    if (isType(propType, 'string') || isType(propType, 'number')) {
      inputElement = (
        <input
          type="text"
          value={state[prop]}
          onChange={({target: {value}}) => {
            setProp(prop, isType(propType, 'number') ? Number(value) : value)
          }} />
      )
    }

    if (propType === 'bool') {
      inputElement = (
        <input
          type="checkbox"
          checked={state[prop]}
          onClick={({target: {checked}}) => setProp(prop, checked)} />
      )
    }

    return inputElement || null
  }

  render() {
    const typeGroups = this.props.types

    return typeGroups && (
      <section>
        <h2>
          Types
        </h2>

        {Object.keys(typeGroups).map((group) => {
          const typeGroup = Object.keys(typeGroups[group])

          return typeGroup.length ? (
            <div>
              <h3
                key={group}>
                {group}
              </h3>

              <ul>
                {typeGroup.map((prop) => {
                  const type = typeGroups[group][prop].type
                  const msg = typeGroups[group][prop].msg
                  return (
                    <li
                      key={prop}>
                      <b>{prop}</b> - {type[0]}{type[1] ? '*' : null}<br />
                      {msg}<br />
                      {this.inputElement(prop, type[0])}
                    </li>
                  )
                })}
              </ul>
            </div>
          ) : null
        })}
      </section>
    ) || null
  }
}

Types.propTypes = {
  setProp: PropTypes.func.isRequired,
  props: PropTypes.object
}

export default Types
