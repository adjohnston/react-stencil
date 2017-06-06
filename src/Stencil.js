import React, { Component } from 'react'
import Documenter from 'components/Documenter'
import assign from 'assign-deep'

export const specify = (globals, props, component) => {
  return assign({propDefs: props}, globals, component)
}

const Stencil = specs => {
  return C => {
    return class Stencil extends Component {
      constructor (props) {
        super(props)

        this.state = {}
        this.extendedExamples = Object.assign(specs.examples || {}, {
          default: {...this.props}
        })
        this.setExample = this.setExample.bind(this)
        this.setProp = this.setProp.bind(this)
      }

      setExample (example) {
        this.setState({...this.extendedExamples[example]})
      }

      setProp (prop, value) {
        this.setState({[prop]: value})
      }

      render () {
        const extendedProps = Object.assign({}, this.props, this.state)
        return (
          <Documenter
            setExample={this.setExample}
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
