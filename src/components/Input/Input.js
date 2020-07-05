import React from 'react'
import './input.scss'
import { InputBox } from '../InputBox/InputBox'

export const Input = ({ label, placeholder, subtitle }) => {
  return (
    <InputBox label={label} subtitle={subtitle}>
      <input type="text" placeholder={placeholder} />
    </InputBox>
  )
}
