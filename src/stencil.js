import React, { Component } from 'react'

import { Provider } from './context'
import { DefaultTemplate } from './components/internal/Template'

const withStencil = (spec = {}) => {
  const { Template = DefaultTemplate } = spec



  return WrappedComponent => {
    return class WithStencil extends Component {
      render() {
        return (
          <Provider value={specs}>
            <Template />
          </Provider>
        )
      }
    }
  }
}

export { withStencil }
export * from './components'
