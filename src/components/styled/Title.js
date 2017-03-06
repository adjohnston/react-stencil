import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  margin: 0 0 1rem;
  font: bold 2.5rem/1 arial;
`

Title.propTypes = {
  children: PropTypes.string.isRequired
}

export default Title
