import React, { useRef } from 'react'
import { Input } from './index'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const InputPassword = ({ handleChange }) => {
  const input = useRef()

  const handleClick = (e, elm) => {
    const svg = e.target
    const box = svg.parentElement
    const svgs = box.querySelectorAll('svg')
    if (elm === 'eye') {
      input.current.type = 'text'
    } else {
      input.current.type = 'password'
    }
    svgs.forEach((s) => {
      s.style.display = 'block'
    })
    svg.style.display = 'none'
  }

  return (
    <div
      style={{
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '1.2rem',
      }}
    >
      <Input
        ref={input}
        type='password'
        placeholder='Eg. your password here'
        onChange={handleChange}
        autoComplete='current-password'
      />
      <AiOutlineEye
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          transform: 'translate(-50%, 25%)',
        }}
        onClick={(e) => handleClick(e, 'eye')}
      />
      <AiOutlineEyeInvisible
        style={{
          display: 'none',
          position: 'absolute',
          top: '0',
          right: '0',
          transform: 'translate(-50%, 25%)',
        }}
        onClick={(e) => handleClick(e, 'eyeInvisible')}
      />
    </div>
  )
}

export default InputPassword
