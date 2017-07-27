import React from 'react'
import renderer from 'react-test-renderer'
import Notes from 'src/components/Notes'

test(`it doesn't render without notes`, () => {
  const tree = renderer
    .create(<Notes />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it renders correctly', () => {
  const props = {
    notes: {}
  }

  const tree = renderer
    .create(<Notes {...props} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it renders groups of notes using strings', () => {
  const props = {
    notes: {
      'Developer Notes': 'I am a developer',
      'Designer Notes': 'I am a designer'
    }
  }

  const tree = renderer
    .create(<Notes {...props} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it renders groups of notes using components', () => {
  const props = {
    notes: {
      'Developer Notes': (
        <div>I am a developer</div>
      ),
      'Designer Notes': (
        <div>I am a designer</div>
      )
    }
  }

  const tree = renderer
    .create(<Notes {...props} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
