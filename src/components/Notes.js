import React from 'react'
import PropTypes from 'prop-types'

const Notes = ({notes}) => (!!notes && (
  <section>
    <h2
      className={classString('__heading')}>
      Notes
    </h2>

    {Object.keys(notes).map(group => (
      <div
        key={group}>
        <h3
          className={classString('__heading')}>
          {group}
        </h3>
        <p
          className={classString('__p')}>
          {notes[group]}
        </p>
      </div>
    ))}
  </section>
)) || null

Notes.propTypes = {
  notes: PropTypes.object
}

export default Notes
