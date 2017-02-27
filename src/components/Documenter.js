import React, { PropTypes } from 'react'
import Title from 'components/Title'
import Notes from 'components/Notes'
import Presets from 'components/Presets'

const Documenter = ({
  name,
  notes,
  presets,
  setPreset,
  children: Component
}) => (
  <section>
    <Title
      text={name} />

    {Component}

    <Notes
      notes={notes} />

    <Presets
      setPreset={setPreset}
      presets={presets} />
  </section>
)

Documenter.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  setPreset: PropTypes.func.isRequired,
  notes: PropTypes.object,
  presets: PropTypes.object
}

export default Documenter
