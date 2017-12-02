import React from 'react'
import PropTypes from 'prop-types'
import Name from 'src/components/Name'
import Description from 'src/components/Description'
import Notes from 'src/components/Notes'
import Status from 'src/components/Status'
import Preview from 'src/components/Preview'
import Examples from 'src/components/Examples'
import Props from 'src/components/Props'

const nameElement = (template, name) => (
  <Name
    name={name}>
    {template}
  </Name>
)

const descriptionElement = (template, description) => (
  <Description
    description={description}>
    {template}
  </Description>
)

const statusElement = (template, status) => (
  <Status
    status={status}>
    {template}
  </Status>
)

const previewElement = (template, component, currentSwatch) => (
  <Preview
    currentSwatch={currentSwatch}
    component={component}>
    {template}
  </Preview>
)

const examplesElement = (template, setExample, currentExample, examples) => (
  <Examples
    setExample={setExample}
    currentExample={currentExample}
    examples={examples}>
    {template}
  </Examples>
)

const notesElement = (template, notes) => (
  <Notes
    notes={notes}>
    {template}
  </Notes>
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
  currentSwatch,
  currentExample,
  children: component,
  template = {}
}) => (
  <div>
    {nameElement(template.name, name)}
    {statusElement(template.status, status)}
    {descriptionElement(template.description, description)}
    {previewElement(template.preview, component, currentSwatch)}
    {examplesElement(template.examples, setExample, currentExample, examples)}

    <Props
      state={componentProps}
      props={props}
      setProp={setProp} />

    {notesElement(template.notes, notes)}
  </div>
)

Documenter.propTypes = {
  children: PropTypes.element.isRequired,
  setExample: PropTypes.func.isRequired,
  setProp: PropTypes.func.isRequired,
  componentProps: PropTypes.object.isRequired,
  currentSwatch: PropTypes.string,
  currentExample: PropTypes.string,
  props: PropTypes.object,
  swatches: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  description: PropTypes.node,
  notes: PropTypes.object,
  examples: PropTypes.object,
  template: PropTypes.shape({
    name: PropTypes.func,
    description: PropTypes.func,
    status: PropTypes.func,
    preview: PropTypes.func,
    examples: PropTypes.func,
    notes: PropTypes.func
  }),
  status: PropTypes.oneOf([
    'DANGEROUS', 'WIP', 'READY'
  ])
}

export default Documenter
