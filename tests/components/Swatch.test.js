import React from 'react'
import renderer from 'react-test-renderer'
import Swatch from 'src/components/Swatch'

test('it renders correctly', () => {
  const props = {
    swatch: 'black',
    onClick: () => {}
  }

  const tree = renderer
    .create(<Swatch {...props} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
