import React, { Component } from 'react'
import { withStencil } from 'react-stencil'
import { withStateHandlers } from 'recompose'
import { Switch } from '@learnerbly/web-components'
// import Template from './Template'

const spec = {
  // Template,

  name: 'Switch',

  description: 'This is an example of a switch component.',

  props: {
    label: 'I am on',
    altLabel: 'I am off'
  }
}

const EnhancedSwitch = withStencil(spec)(
  withStateHandlers(
    ({ initialValue = false }) => ({
      value: initialValue
    }),
    {
      onChange: ({ value }) => () => ({
        value: !value
      })
    })(Switch)
)

class App extends Component {
  render() {
    return <EnhancedSwitch />
  }
}

export default App
