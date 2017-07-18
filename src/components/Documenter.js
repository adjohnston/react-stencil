import React from 'react'
import PropTypes from 'prop-types'
import Notes from 'components/Notes'
import Description from 'components/Description'
import Preview from 'components/Preview'
import Examples from 'components/Examples'
import Props from 'components/Props'
import className from 'helpers/class-name'

const Documenter = ({
  name,
  description,
  notes,
  props,
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

    <Description>
      {description}
    </Description>

    <section
      className={className('body')}>
      <Preview
        swatches={swatches}>
        {Component}
      </Preview>

      <Examples
        setExample={setExample}
        examples={examples} />

      <Props
        state={componentProps}
        props={props}
        setProp={setProp} />

      <Notes
        notes={notes} />
    </section>
  </section>
)

Documenter.propTypes = {
  children: PropTypes.element.isRequired,
  setExample: PropTypes.func.isRequired,
  setProp: PropTypes.func.isRequired,
  componentProps: PropTypes.object.isRequired,
  props: PropTypes.object,
  swatches: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  description: PropTypes.node,
  notes: PropTypes.object,
  examples: PropTypes.object
}

export default Documenter
