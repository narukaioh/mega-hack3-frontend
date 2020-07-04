import React, { useState } from 'react'
import './textarea.scss'
import { InputBox } from '../InputBox/InputBox'

export const TextArea = ({ label, placeholder }) => {

  const [length, setLength] = useState(0)

  const handlerOnChange = (e) => {
    setLength(e.target.value.length)
  }
  
  return (
    <InputBox label={label}>
      <textarea className="text-area-component" onChange={handlerOnChange} rows="7" placeholder={placeholder} maxLength="300"></textarea>
      <p className="text-area-label">{length}/300 caracteres</p>
    </InputBox>
  )
}
