import React from 'react'
import renderer from 'react-test-renderer'
import Input from 'components/Input'

test('renders correctly', () => {
  const mockProps = {
    name: 'className',
    type: 'string',
    value: 'button',
    onChange: () => {}
  }

  const tree = renderer
    .create(<Input {...mockProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('renders input type of checkbox given a type of bool', () => {
  const mockProps = {
    name: 'isActive',
    type: 'bool',
    value: false,
    onChange: () => {}
  }

  const tree = renderer
    .create(<Input {...mockProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('renders input type of checkbox given a type of bool and has attribute checked', () => {
  const mockProps = {
    name: 'isActive',
    type: 'bool',
    value: true,
    onChange: () => {}
  }

  const tree = renderer
    .create(<Input {...mockProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
