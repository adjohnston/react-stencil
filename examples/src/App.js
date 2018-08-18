import React, { Component } from 'react'
import { withStencil } from 'react-stencil'
import { Switch } from '@learnerbly/web-components'
// import Template from './Template'

const spec = {
  // Template,

  name: 'Switch',

  description: 'This is an example of a switch component.',

  props: {
    label: 'I am on',
    altLabel: 'I am off',
    value: false,
    onChange: ({ value }) => ({ value: !value }),
  }
}

const EnhancedSwitch = withStencil(spec)(Switch)

class App extends Component {
  render() {
    return <EnhancedSwitch />
  }
}

export default App
