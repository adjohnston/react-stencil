import React, { PropTypes } from 'react'
import Notes from 'components/Notes'
import Presets from 'components/Presets'
import Props from 'components/Props'
import Layout from 'components/styled/Layout'
import Column from 'components/styled/Column'
import Title from 'components/styled/Title'
import Preview from 'components/styled/Preview'

const Documenter = ({
  name,
  notes,
  props,
  presets,
  setPreset,
  setProp,
  componentProps,
  children: Component
}) => (
  <div>
    <Title>
      {name}
    </Title>

    <Layout>
      <Column
        grow="3">
        <Preview>
          <div>
            {Component}
          </div>
        </Preview>

        <Layout>
          <Column>
            <Presets
              setPreset={setPreset}
              presets={presets} />
          </Column>

          <Column
            grow="2">
            <Props
              state={componentProps}
              props={props}
              setProp={setProp} />
          </Column>
        </Layout>
      </Column>

      <Column>
        <Notes
          notes={notes} />
      </Column>
    </Layout>
  </div>
)

Documenter.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  setPreset: PropTypes.func.isRequired,
  notes: PropTypes.object,
  presets: PropTypes.object
}

export default Documenter
