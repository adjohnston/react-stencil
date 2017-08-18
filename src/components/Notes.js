import React from 'react'
import PropTypes from 'prop-types'
import classString from 'src/helpers/class-string'
import kebabCase from 'src/helpers/kebab-case'
import HeadingAnchor from 'src/components/HeadingAnchor'

const Notes = ({notes}) => (!!notes && (
  <section
    className={`${classString('__section')} ${classString('__section--slim')}`}>
    <h2
      className={classString('__heading')}>
      <HeadingAnchor
        anchorId='notes' />
      Notes
    </h2>

    {Object.keys(notes).map(group => (
      <div
        key={group}
        className={classString('__note')}>
        <h3
          className={classString('__heading')}>
          <HeadingAnchor
            anchorId={`notes-${kebabCase(group)}`} />
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
