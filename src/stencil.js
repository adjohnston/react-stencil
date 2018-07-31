import React, { Component } from 'react'

import { Provider } from './context'
import { DefaultTemplate } from './components/internal/Template'

const withStencil = (spec = {}) => {
  const { Template = DefaultTemplate } = spec

  return WrappedComponent => {
    return class Stencil extends Component {
      render() {
        const Component = () => <WrappedComponent {...spec.props} />
        const enhancedContext = { ...spec, Component }

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
