import React from 'react'
import {GeneralButton} from './styledButton'

const Button = ({children, onClick, mar}) => {
  return (
    <>
        <GeneralButton onClick={onClick}>{children}</GeneralButton>
    </>
  )
}

export default Button