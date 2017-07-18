import React from 'react'
import PropTypes from 'prop-types'
import Notes from 'components/Notes'
import Description from 'components/Description'
import Status from 'components/Status'
import Preview from 'components/Preview'
import Examples from 'components/Examples'
import Props from 'components/Props'
import classString from 'helpers/class-string'

const Documenter = ({
  name,
  description,
  status,
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
    className={classString('__layout')}>
    <h1
      className={classString('__title')}>
      {name}
    </h1>

    <Status
      status={status} />

    <Description>
      {description}
    </Description>

    <section
      className={classString('__body')}>
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
  examples: PropTypes.object,
  status: PropTypes.oneOf([
    'DANGEROUS', 'WIP', 'READY'
  ])
}

export default Documenter
