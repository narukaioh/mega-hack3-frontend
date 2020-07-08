import React from 'react'
import './password.scss'
import { InputBox } from '../../InputBox/InputBox'

export const Password = ({ label, placeholder, subtitle, name, onChange }) => {
  return (
    <InputBox label={label} subtitle={subtitle}>
      <input type="password" onChange={onChange} name={name} placeholder={placeholder} />
    </InputBox>
  )
}
