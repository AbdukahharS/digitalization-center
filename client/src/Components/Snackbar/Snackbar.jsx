import React from 'react'
import { Container, Close } from './SnackbarStyles'
import { MdErrorOutline, MdDone, MdOutlineClose } from 'react-icons/md'

const Snackbar = ({ children, variant }) => {
  return (
    <Container>
      <div>
        {variant === 'error' && <MdErrorOutline />}
        {variant === 'success' && <MdDone />}
        {children}
      </div>
      <Close>
        <MdOutlineClose />
      </Close>
    </Container>
  )
}

export default Snackbar
