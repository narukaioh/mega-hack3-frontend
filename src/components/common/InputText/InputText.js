import React from 'react'
import './input.scss'
import { InputBox } from '../InputBox/InputBox'
import Input from '../Input/Input'

export const InputText = ({ label, placeholder, subtitle, name, onChange }) => {
  return (
    <InputBox label={label} subtitle={subtitle}>
      <Input type="text" onChange={onChange} name={name} placeholder={placeholder} />
    </InputBox>
  )
}
