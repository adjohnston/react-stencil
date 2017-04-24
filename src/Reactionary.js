import React, { Component } from 'react'
import Documenter from 'components/Documenter'
import assign from 'assign-deep'

export const specify = (globalDefs, types, defs) => {
  return assign({}, {types: Object.keys(types).reduce((prev, type) => {
    prev[type] = (
      globalDefs[type]
      ? Object.assign({}, types[type], globalDefs[type])
      : prev[type] = types[type]
    )

    return prev
  }, {})}, defs)
}

const Reactionary = specs => {
  return C => {
    return class Reactionary extends Component {
      constructor (props) {
        super(props)

        this.state = {}
        this.extendedPresets = Object.assign(specs.presets || {}, {
          default: {...this.props}
        })
        this.setPreset = this.setPreset.bind(this)
        this.setProp = this.setProp.bind(this)
      }

      setPreset (preset) {
        this.setState({...this.extendedPresets[preset]})
      }

      setProp (prop, value) {
        this.setState({[prop]: value})
      }

      render () {
        const extendedProps = Object.assign({}, this.props, this.state)
        return (
          <Documenter
            setPreset={this.setPreset}
            setProp={this.setProp}
            componentProps={extendedProps}
            {...specs}>
            <C {...extendedProps} />
          </Documenter>
        )
      }
    }
  }
}

export default Reactionary
