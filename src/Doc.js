import React, { Component } from 'react'
import Documenter from 'components/Documenter'

const Doc = specs => {
  return C => {
    return class Doc extends Component {
      constructor(props) {
        super(props)

        this.state = {}
        this.setPreset = this.setPreset.bind(this)
      }

      setPreset(preset) {
        this.setState(preset)
      }

      render() {
        const extendedProps = Object.assign({}, this.props, this.state)
        const extendedPresets = specs.presets.default = {...this.props}
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
