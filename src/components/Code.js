import React from 'react'
import PropTypes from 'prop-types'
import CodeMirror from 'react-codemirror'

const Code = ({jsx, html}) => (
  <div>
    <CodeMirror value={jsx} />
    <CodeMirror value={html} />
  </div>
)

Code.propTypes = {
  jsx: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired
}

export default Code
