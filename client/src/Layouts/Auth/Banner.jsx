import React from 'react'
import { ReactComponent as Image } from '../../Images/Object.svg'

const Banner = () => {
  return (
    <Image
      style={{
        opacity: '0.1',
        filter: 'blur(6px)',
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '65vw',
        minWidth: '1133px',
        zIndex: '0',
      }}
    />
  )
}

export default Banner
