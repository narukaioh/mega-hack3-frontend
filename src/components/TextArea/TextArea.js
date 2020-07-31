import React, { useState } from 'react'
import './textarea.scss'
import { InputBox } from '../InputBox/InputBox'

export const TextArea = ({ label, placeholder, onChange, name }) => {
  
  const [length, setLength] = useState(0)

  const handleChange = (e) => {
    setLength(e.target.value.length)
    onChange(e)
  }

  return (
    <InputBox label={label}>
      <textarea onChange={handleChange} name={name} className="text-area-component" rows="7" placeholder={placeholder} maxLength="300"></textarea>
      <p className="text-area-label">{length}/300 caracteres</p>
    </InputBox>
  )
}
