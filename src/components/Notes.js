import React, { PropTypes } from 'react'
import Subtitle from 'components/styled/Subtitle'

//    addBreaks : string -> string
const addBreaks = str => str.replace(/\n/g, '<br>')

//    renderNotes : string -> object
const renderNotes = str => ({
  __html: addBreaks(str)
})

const Notes = ({notes}) => notes && (
  <div>
    <Subtitle>
      Notes
    </Subtitle>

    {Object.keys(notes).map(user => (
      <article
        key={user}>
        <h3>{user} says</h3>
        <p
          dangerouslySetInnerHTML={renderNotes(notes[user])}></p>
      </article>
    ))}
  </div>
) || null

Notes.propTypes = {
  notes: PropTypes.object
}

export default Notes
