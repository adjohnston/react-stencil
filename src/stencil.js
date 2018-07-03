import React, { Component, Fragment } from 'react'
import { Provider } from './context'
import Name from './components/Name'

const DefaultTemplate = ({ Component }) =>
  <Fragment>
    <Name />

    <Component />
  </Fragment>

//    withStencil : object -> component -> component
const withStencil = (specs = {}) => {
  const { Template = DefaultTemplate } = specs

  return WrappedComponent => {
    return class WithStencil extends Component {
      render() {
        return (
          <Provider value={specs}>
            <Template Component={() => <WrappedComponent {...specs.props} />} />
          </Provider>
        )
      }
    }
  }
}

export { withStencil }
export * from './components'
