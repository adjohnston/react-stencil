import React, { Component } from 'react'
import Documenter from 'components/Documenter'

export const specify = (globalDefs, {types}, defs) => {
  const keys = Object.keys(types.propTypes)

  return Object.assign(
    {},
    {types: {
      propTypes: keys.reduce((p, key) => {
        const next = Object.assign({}, {[key]: globalDefs[key]}, {[key]: types.propTypes[key]})
        return Object.assign(p, next)
      }, {})
    }},
    defs
  )
}

const Reactionary = specs => {
  return C => {
    return class Doc extends Component {
      constructor(props) {
        super(props)

        this.state = {}
        this.extendedPresets = Object.assign(specs.presets || {}, {
          default: {...this.props}
        })
        this.setPreset = this.setPreset.bind(this)
        this.setProp = this.setProp.bind(this)
      }

      setPreset(preset) {
        this.setState({...this.extendedPresets[preset]})
      }

      setProp(prop, value) {
        this.setState({[prop]: value})
      }

      render() {
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
