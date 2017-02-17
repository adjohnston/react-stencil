import React from 'react'

const addBreaks = str => {
  return str.replace(/\n/g, '<br>')
}

const renderNotes = str => {
  return {
    __html: addBreaks(str)
  }
}

export default (props) => (
  <div>
    <h1>{props.name || 'Bob'}</h1>

    {props.children}

    {Object.keys(props.notes).map(user => (
      <article
        key={user}>
        <h3>{user} says</h3>
        <p
          dangerouslySetInnerHTML={renderNotes(props.notes[user])}></p>
      </article>
    ))}

    {Object.keys(props.presets).map(preset => (
      <button
        key={preset}
        onClick={() => props.setPreset(props.presets[preset])}>
        {preset}
      </button>
    ))}
  </div>
)
