import React from 'react'
import Title from 'components/Title'
import Notes from 'components/Notes'
import Presets from 'components/Presets'

export default ({name, notes, presets, setPreset, children}) => (
  <section>
    <Title
      text={name}/>

    {children}

    <Notes
      notes={notes}/>

    <Presets
      setPreset={setPreset}
      presets={presets}/>
  </section>
)
