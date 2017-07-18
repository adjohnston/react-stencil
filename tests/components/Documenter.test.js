import React from 'react'
import renderer from 'react-test-renderer'
import Documenter from 'components/Documenter'

const Test = () => <div>Just a test</div>
const mockProps = {
  setExample: () => {},
  setProp: () => {},
  componentProps: {
    id: {
      type: 'string'
    },

    onClick: {
      type: 'func',
      required: true
    }
  },
  swatches: ['white', 'black', '#f35'],
  children: <Test />,
  name: 'Test',
  description: 'Just a simple test component',
  status: 'READY',
  notes: {
    'Developer notes': 'I am just a string',
    'Designer notes': <div>I use a component</div>
  },
  examples: {
    'Basic example': {
      id: 'basic-example-id'
    }
  }
}

test('it should render correctly', () => {
  const tree = renderer
    .create(<Documenter {...mockProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it should render correctly without a description', () => {
  const {
    description,
    ...otherProps
  } = mockProps

  const tree = renderer
    .create(<Documenter {...otherProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it should render correctly without a swatches', () => {
  const {
    swatches,
    ...otherProps
  } = mockProps

  const tree = renderer
    .create(<Documenter {...otherProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it should render correctly without a notes', () => {
  const {
    notes,
    ...otherProps
  } = mockProps

  const tree = renderer
    .create(<Documenter {...otherProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it should render correctly without a examples', () => {
  const {
    examples,
    ...otherProps
  } = mockProps

  const tree = renderer
    .create(<Documenter {...otherProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it should render correctly without a status', () => {
  const {
    status,
    ...otherProps
  } = mockProps

  const tree = renderer
    .create(<Documenter {...otherProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
