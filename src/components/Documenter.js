import React from 'react'
import PropTypes from 'prop-types'
import Notes from 'components/Notes'
import Preview from 'components/Preview'
import Presets from 'components/Presets'
import Properties from 'components/Properties'
import { className } from 'helpers'

const Documenter = ({
  name,
  notes,
  propDefs,
  presets,
  setPreset,
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
        swatches={swatches} />

      <Presets
        setPreset={setPreset}
        presets={presets} />

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
  setPreset: PropTypes.func.isRequired,
  setProp: PropTypes.func.isRequired,
  componentProps: PropTypes.object.isRequired,
  propDefs: PropTypes.object,
  swatches: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  notes: PropTypes.object,
  presets: PropTypes.object
}

export default Documenter
