import React, { PropTypes } from 'react'

//    addBreaks : string -> string
const addBreaks = str => str.replace(/\n/g, '<br>')

//    renderNotes : string -> object
const renderNotes = str => ({
  __html: addBreaks(str)
})

const Notes = ({notes}) => notes && (
  <aside>
    <h2>
      Notes
    </h2>

    {Object.keys(notes).map(user => (
      <div
        key={user}>
        <h3>
          {user}
        </h3>
        <p
          dangerouslySetInnerHTML={renderNotes(notes[user])} />
      </div>
    ))}
  </aside>
) || null

Notes.propTypes = {
  notes: PropTypes.object
}

export default Notes
