import React, { PropTypes } from 'react'
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
  <section>
    <h1
      className={className('title')}>
      {name}
    </h1>

    <section>
      <div>
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
