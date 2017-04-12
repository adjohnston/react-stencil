import React from 'react'
import PropTypes from 'prop-types'
import Notes from 'components/Notes'
import Presets from 'components/Presets'
import Types from 'components/Types'
import { className } from 'helpers'

const Documenter = ({
  name,
  notes,
  types,
  presets,
  setPreset,
  setProp,
  componentProps,
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
      <div
        className={className('preview')}>
        {Component}
      </div>

      <Presets
        setPreset={setPreset}
        presets={presets} />

      <Types
        state={componentProps}
        types={types}
        setProp={setProp} />
    </section>

    <Notes
      notes={notes} />
  </section>
)

Documenter.propTypes = {
  children: PropTypes.element.isRequired,
  setPreset: PropTypes.func.isRequired,
  name: PropTypes.string,
  notes: PropTypes.object,
  presets: PropTypes.object
}

export default Documenter
