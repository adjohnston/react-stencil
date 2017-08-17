import React, { Component } from 'react'
import Documenter from 'src/components/Documenter'

//    stencil : object -> component -> component
const stencil = (specs = {}) => {
  return WrappedComponent => {
    return class Stencil extends Component {
      constructor (props) {
        super(props)

        this.state = {}
        this.extendedExamples = Object.assign(specs.examples || {}, {
          Default: {...this.props}
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
            <WrappedComponent {...extendedProps} />
          </Documenter>
        )
      }
    }
  }
}

export { default as merge } from 'src/helpers/merge'
export default stencil
