import React from 'react'
import PropTypes from 'prop-types'

const FallbackTemplate = (notes) => (!!notes && (
  <section>
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
  </section>
)) || null

const Notes = ({ children, notes }) => (
  (children && notes)
    ? children(notes)
    : FallbackTemplate(notes)
)

Notes.propTypes = {
  notes: PropTypes.object
}

export default Notes
