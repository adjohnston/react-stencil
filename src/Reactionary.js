import React, { Component } from 'react'
import Documenter from 'components/Documenter'

const Doc = specs => {
  return C => {
    return class Doc extends Component {
      constructor(props) {
        super(props)

        this.state = {}
        this.extendedPresets = Object.assign(specs.presets, {
          default: {...this.props}
        })
        this.setPreset = this.setPreset.bind(this)
      }

      setPreset(preset) {
        this.setState({...this.extendedPresets[preset]})
      }

      render() {
        const extendedProps = Object.assign({}, this.props, this.state)
        const extendedSpecs = Object.assign({}, specs, extendedSpecs)

        return (
          <Documenter
            setPreset={this.setPreset}
            {...extendedSpecs}>
            <C {...extendedProps} />
          </Documenter>
        )
      }
    }
  }
}

export default Doc
