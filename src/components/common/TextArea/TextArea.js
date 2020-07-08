import React from 'react'
import './textarea.scss'
import { InputBox } from '../../InputBox/InputBox'

export const TextArea = ({ label, placeholder, onChange, name, length }) => {
  
  return (
    <InputBox label={label}>
      <textarea onChange={onChange} name={name} className="text-area-component" rows="7" placeholder={placeholder} maxLength="300"></textarea>
      <p className="text-area-label">{length}/300 caracteres</p>
    </InputBox>
  )
}
