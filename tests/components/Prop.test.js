import React from 'react'
import renderer from 'react-test-renderer'
import Prop from 'components/Prop'

test('renders correctly', () => {
  const mockProps = {
    name: 'className',
    defs: {
      type: 'string',
      required: true,
      defaultValue: 'button',
      description: 'Add a class to the element'
    },
    value: 'button',
    onChange: () => {}
  }

  const tree = renderer
    .create(<Prop {...mockProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('renders a toggle element with a type of bool', () => {
  const mockProps = {
    name: 'isActive',
    defs: {
      type: 'bool',
      required: true,
      defaultValue: false,
      description: 'isActive indicates whether the component is active or not'
    },
    value: true,
    onChange: () => {}
  }

  const tree = renderer
    .create(<Prop {...mockProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
