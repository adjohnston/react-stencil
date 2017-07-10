import React from 'react'
import renderer from 'react-test-renderer'
import Props from 'components/Props'

const mockState = {
  id: 'just-a-string-id',
  onClick: () => {},
  value: 20,
  description: 'Something something'
}

const mockProps = {
  id: {
    type: 'string'
  },

  onClick: {
    type: 'func',
    required: true
  },

  value: {
    type: 'number',
    defaultValue: 10
  },

  description: {
    type: 'string',
    description: 'Just a basic description'
  }
}

test('renders null without props', () => {
  const tree = renderer
    .create(
      <Props
        state={mockState}
        setProp={() => {}} />
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('renders null without state', () => {
  const tree = renderer
    .create(
      <Props
        props={mockProps}
        setProp={() => {}} />
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('renders null without state and props', () => {
  const tree = renderer
    .create(
      <Props
        setProp={() => {}} />
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('renders correctly', () => {
  const tree = renderer
    .create(
      <Props
        setProp={() => {}}
        state={mockState}
        props={mockProps} />
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
