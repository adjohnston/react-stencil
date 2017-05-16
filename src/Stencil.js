import React, { Component } from 'react'
import Documenter from 'components/Documenter'
import assign from 'assign-deep'

export const specify = (globalDefs, propDefs, componentDefs) => {
  return assign({}, {propDefs: Object.keys(propDefs).reduce((prev, prop) => {
    prev[prop] = (
      globalDefs[prop]
      ? Object.assign({}, propDefs[prop], globalDefs[prop])
      : prev[prop] = propDefs[prop]
    )

    return prev
  }, {})}, componentDefs)
}

const Stencil = specs => {
  return C => {
    return class Stencil extends Component {
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

export default Stencil
