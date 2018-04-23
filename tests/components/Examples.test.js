import React from 'react'
import renderer from 'react-test-renderer'
import Examples from 'src/components/Examples'

test('it should not render without examples', () => {
  const mockProps = {
    setExample: () => {}
  }

  const tree = renderer
    .create(<Examples {...mockProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it should render correctly', () => {
  const mockProps = {
    examples: {
      'something else': {}
    },
    setExample: () => {}
  }

  const tree = renderer
    .create(<Examples {...mockProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it should render correctly when given a template', () => {
  const mockProps = {
    examples: {
      'something else': {}
    },
    setExample: () => {},
    children: (setExample, currentExample, examples) => (
      <div>
        <h1>
          Usecases
        </h1>

        {Object.keys(examples).map(example => (
          <button
            key={example}
            onClick={({ target: { value } }) => setExample(value)}>
            {example}
          </button>
        ))}
      </div>
    )
  }

  const tree = renderer
    .create(<Examples {...mockProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
