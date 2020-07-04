import React from 'react'
import './input.scss'
import { InputBox } from '../InputBox/InputBox'

export const Input = ({ label, placeholder }) => {
  return (
    <InputBox label={label}>
      <input type="text" placeholder={placeholder} />
    </InputBox>
  )
}
