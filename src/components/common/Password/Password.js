import React from 'react'
import './password.scss'
import { InputBox } from '../InputBox/InputBox'
import Input from '../Input/Input'

const isValid = (password) => password.length >= 6 && password.length <= 10

export const Password = ({ label, placeholder, subtitle, name, onChange, onClick }) => {
  return (
    <InputBox label={label} subtitle={subtitle}>
      <Input 
        type="password" 
        onClick={onClick}
        onChange={onChange} 
        name={name} 
        placeholder={placeholder} 
        validation={isValid}
      />
    </InputBox>
  )
}
