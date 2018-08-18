import React, { Component } from 'react'

import { Provider } from './context'
import { DefaultTemplate } from './components/internal/Template'

const withStencil = (spec = {}) => {
  const { Template = DefaultTemplate } = spec

  return (WrappedComponent) => {
    return class WithStencil extends Component {
      state = { ...spec.props }

      enhanceHandlers = (props) => {
        return Object.keys(props).reduce((enhancedProps, key) => {
          if (typeof props[key] === 'function')
            enhancedProps[key] = () => this.setState(props[key])

          return enhancedProps
        }, {})
      }

      changeHandler = (prop) => ({ target: { type, checked, value } }) => {
        this.setState((state) => ({
          ...state,
          [prop]: type === 'checkbox' ? checked : value,
        }))
      }

      render() {
        const state = this.state
        const handlers = this.enhanceHandlers(spec.props)
        const Component = () => <WrappedComponent {...state} {...handlers} />
        const enhancedContext = {
          ...spec,
          Component,
          props: state,
          changeHandler: this.changeHandler,
        }

        return (
          <Provider value={enhancedContext}>
            <Template />
          </Provider>
        )
      }
    }
  }
}

export { withStencil }
export * from './components'
