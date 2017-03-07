import React, { PropTypes } from 'react'
import Subtitle from 'components/styled/Subtitle'
import {
  Note,
  Title,
  Message
} from 'components/styled/Note'

const addBreaks = str => {
  return str.replace(/\n/g, '<br>')
}

const renderNotes = str => {
  return {
    __html: addBreaks(str)
  }
}

const Notes = ({notes}) => notes && (
  <div>
    <Subtitle>
      Notes
    </Subtitle>

    {Object.keys(notes).map(user => (
      <Note
        key={user}>
        <Title>
          {user}
        </Title>
        <Message
          dangerouslySetInnerHTML={renderNotes(notes[user])} />
      </Note>
    ))}
  </div>
) || null

Notes.propTypes = {
  notes: PropTypes.object
}

export default Notes
