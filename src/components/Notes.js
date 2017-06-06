import React from 'react'
import PropTypes from 'prop-types'

const hasNotes = (notes) => Object.keys(notes).length > 0

const Notes = ({notes}) => (hasNotes(notes) && (
  <aside>
    <h2>
      Notes
    </h2>

    {Object.keys(notes).map(group => (
      <div
        key={group}>
        <h3>
          {group}
        </h3>
        {notes[group]}
      </div>
    ))}
  </aside>
)) || null

Notes.propTypes = {
  notes: PropTypes.object
}

export default Notes
