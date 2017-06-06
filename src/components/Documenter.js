import React from 'react'
import PropTypes from 'prop-types'
import Notes from 'components/Notes'
import Preview from 'components/Preview'
import Examples from 'components/Examples'
import Properties from 'components/Properties'
import { className } from 'helpers'

const Documenter = ({
  name,
  notes,
  propDefs,
  examples,
  setExample,
  setProp,
  componentProps,
  swatches,
  children: Component
}) => (
  <section
    className={className('layout')}>
    <h1
      className={className('title')}>
      {name}
    </h1>

    <section
      className={className('body')}>
      <Preview
        swatches={swatches}>
        {Component}
      </Preview>

      <Examples
        setExample={setExample}
        examples={examples} />

      <Properties
        state={componentProps}
        propDefs={propDefs}
        setProp={setProp} />
    </section>

    <Notes
      notes={notes} />
  </section>
)

Documenter.propTypes = {
  children: PropTypes.element.isRequired,
  setExample: PropTypes.func.isRequired,
  setProp: PropTypes.func.isRequired,
  componentProps: PropTypes.object.isRequired,
  propDefs: PropTypes.object,
  swatches: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  notes: PropTypes.object,
  examples: PropTypes.object
}

export default Documenter
