import React from 'react'
import PropTypes from 'prop-types'
import classString from 'src/helpers/class-string'

const FallbackTemplate = (setExample, currentExample, examples) => (!!examples && (
  <section>
    <h2
      className={classString('__title')}>
      Examples
    </h2>

    <div
      className={classString('__dropdown')}>
      <select
        className={classString('__dropdown__select')}
        onChange={({ target: { value } }) => setExample(value)}
        value={currentExample}>

        {Object.keys(examples).map(example => (
          <option
            key={example}>
            {example}
          </option>
        ))}
      </select>

      <div className={classString('__dropdown__arrow')} />
    </div>
  </section>
)) || null

const Examples = ({ children, setExample, currentExample, examples }) => {
  return (
    (children && examples)
      ? children(setExample, currentExample, examples)
      : FallbackTemplate(setExample, currentExample, examples)
  )
}

Examples.propTypes = {
  setExample: PropTypes.func.isRequired,
  currentExample: PropTypes.string,
  children: PropTypes.func,
  examples: PropTypes.object
}

export default Examples
