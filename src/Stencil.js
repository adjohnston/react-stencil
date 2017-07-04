import React, { Component } from 'react'
import Documenter from 'components/Documenter'
import assign from 'assign-deep'

export const merge = ({props, swatches} = {}, component) => {
  return assign({}, {props, swatches}, component)
}

const stencil = specs => {
  return wrappedComponent => {
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
            <wrappedComponent {...extendedProps} />
          </Documenter>
        )
      }
    }
  }
}

export default stencil
