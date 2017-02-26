import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Subtitle = styled.h2`
  margin: 0 0 .5rem;
  font: bold 1.25rem/1.25 arial;
`

Subtitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default Subtitle
