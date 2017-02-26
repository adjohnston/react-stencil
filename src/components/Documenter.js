import React, { PropTypes } from 'react'
import Notes from 'components/Notes'
import Presets from 'components/Presets'
import Layout from 'components/styled/Layout'
import Title from 'components/styled/Title'
import Preview from 'components/styled/Preview'

const Documenter = ({
  name,
  notes,
  presets,
  setPreset,
  children: Component
}) => (
  <Layout>
    <Title>
      {name}
    </Title>

    <Preview>
      <div>
        {Component}
      </div>
    </Preview>

    <Notes
      notes={notes} />

    <Presets
      setPreset={setPreset}
      presets={presets} />
  </Layout>
)

Documenter.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  setPreset: PropTypes.func.isRequired,
  notes: PropTypes.object,
  presets: PropTypes.object
}

export default Documenter
