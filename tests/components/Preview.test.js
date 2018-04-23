import React from 'react'
import renderer from 'react-test-renderer'
import Preview from 'src/components/Preview'

const Test = () => <div>Just a test</div>

test('it renders correctly', () => {
  const props = {
    swatches: [],
    component: <Test />
  }

  const tree = renderer
    .create(<Preview {...props} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it should render correctly when given a template', () => {
  const mockProps = {
    currentSwatch: 'A test component',
    component: <Test />,
    children: (component, currentSwatch) => (
      <div
        style={{background: currentSwatch}}
        className='some-other-class'>
        {component}
      </div>
    )
  }

  const tree = renderer
    .create(<Preview {...mockProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
