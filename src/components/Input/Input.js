import React from 'react'
import './input.scss'
import { InputBox } from '../InputBox/InputBox'

export const Input = ({ label, placeholder }) => {
  return (
    <InputBox label={label}>
      <input placeholder={placeholder} />
    </InputBox>
  )
}
