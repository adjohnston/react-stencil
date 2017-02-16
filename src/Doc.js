import React, { Component } from 'react'
import Documenter from 'components/Documenter'

const Doc = specs => {
  return C => {
    return props => (
      <Documenter {...specs}>
        <C {...props}/>
      </Documenter>
    )
  }
}

export default Doc
