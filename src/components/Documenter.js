import React from 'react'
import PropTypes from 'prop-types'
import Notes from 'src/components/Notes'
import Description from 'src/components/Description'
import Status from 'src/components/Status'
import Preview from 'src/components/Preview'
import Examples from 'src/components/Examples'
import Props from 'src/components/Props'
import classString from 'src/helpers/class-string'

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
    <header
      className={classString('__component-header')}>
      <h1
        className={classString('__heading')}>
        {name}
      </h1>

      <Status
        status={status} />
    </header>

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
