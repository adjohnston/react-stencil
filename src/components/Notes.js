import React from 'react'
import PropTypes from 'prop-types'

//    addBreaks : string -> string
const addBreaks = str => str.replace(/\n/g, '<br>')

//    renderNotes : string -> object
const renderNotes = str => ({
  __html: addBreaks(str)
})

const hasNotes = (notes) => Object.keys(notes).length > 0

const Notes = ({notes}) => (hasNotes(notes) && (
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
)) || null

Notes.propTypes = {
  notes: PropTypes.object
}

export default Notes
