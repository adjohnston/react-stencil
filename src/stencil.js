import React, { Component } from 'react'

//    withStencil : object -> component -> component
const withStencil = (specs = {}) => {
  return WrappedComponent => {
    return class WithStencil extends Component {
      render () {
        return (
          <WrappedComponent />
        )
      }
    }
  }
}

export withStencil
