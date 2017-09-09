import React from 'react'
import PropTypes from 'prop-types'
import Name from 'src/components/Name'
import Description from 'src/components/Description'
import Notes from 'src/components/Notes'
import Status from 'src/components/Status'
import Preview from 'src/components/Preview'
import Examples from 'src/components/Examples'
import Props from 'src/components/Props'
import classString from 'src/helpers/class-string'

const nameElement = (template = {}, name) => (
  <Name
    name={name}>
    {template.name}
  </Name>
)

const descriptionElement = (template = {}, description) => (
  <Description
    description={description}>
    {template.description}
  </Description>
)

const statusElement = (template = {}, status) => (
  <Status
    status={status}>
    {template.status}
  </Status>
)

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
  template,
  children: Component
}) => (
  <section
    className={classString('__layout')}>

    {nameElement(template, name)}
    {statusElement(template, status)}
    {descriptionElement(template, description)}

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
  template: PropTypes.shape({
    description: PropTypes.func
  }),
  status: PropTypes.oneOf([
    'DANGEROUS', 'WIP', 'READY'
  ])
}

export default Documenter
