import React from 'react'
import renderer from 'react-test-renderer'
import Status from 'src/components/Status'

test('it should render correctly with status - DANGEROUS', () => {
  const mockProps = {
    status: 'DANGEROUS'
  }

  const tree = renderer
    .create(<Status {...mockProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it should render correctly with status - WIP', () => {
  const mockProps = {
    status: 'WIP'
  }

  const tree = renderer
    .create(<Status {...mockProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it should render correctly with status - READY', () => {
  const mockProps = {
    status: 'READY'
  }

  const tree = renderer
    .create(<Status {...mockProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it should render null without a status', () => {
  const tree = renderer
    .create(<Status />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
