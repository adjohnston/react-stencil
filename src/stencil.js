import React, { Component } from 'react'
import Documenter from 'src/components/Documenter'

//    stencil : object -> component -> component
const stencil = (specs = {}) => {
  return WrappedComponent => {
    return class Stencil extends Component {
      constructor (props) {
        super(props)

        this.state = {
          currentSwatch: '',
          currentExample: 'default'
        }

        this.extendedExamples = Object.assign(specs.examples || {}, {
          default: {...this.props}
        })

        this.setExample = this.setExample.bind(this)
        this.setProp = this.setProp.bind(this)
        this.setSwatch = this.setSwatch.bind(this)
      }

      setExample (example) {
        this.setState({
          currentExample: example,
          ...this.extendedExamples[example]
        })
      }

      setProp (prop, value) {
        this.setState({[prop]: value})
      }

      setSwatch (swatch) {
        this.setState({
          currentSwatch: swatch
        })
      }

      render () {
        const {
          currentSwatch,
          currentExample,
          ...componentState
        } = this.state

        const extendedProps = Object.assign({}, this.props, componentState)
        return (
          <Documenter
            setExample={this.setExample}
            setProp={this.setProp}
            setSwatch={this.setSwatch}
            currentSwatch={currentSwatch}
            currentExample={currentExample}
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
