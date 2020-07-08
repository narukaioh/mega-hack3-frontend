import React from 'react'
import './input.scss'
import { InputBox } from '../InputBox/InputBox'

export const Input = ({ label, placeholder, subtitle, name, onChange }) => {
  return (
    <InputBox label={label} subtitle={subtitle}>
      <input type="text" onChange={onChange} name={name} placeholder={placeholder} />
    </InputBox>
  )
}
