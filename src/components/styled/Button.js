import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  height: 2rem;
  padding: 0 1.5rem;
  background: ${({current}) => current ? '#dadeec' : 'transparent'};
  border: 1px solid #333;
  border-right-width: 0;
  font: 1rem/1 arial;
  color: #333;
  cursor: pointer;

  &:first-child {
    border-radius: 4px 0 0 4px;
  }

  &:last-child {
    border-right-width: 1px;
    border-radius: 0 4px 4px 0;
  }

  &:focus {
    outline: 0;
  }
`

export default Button
