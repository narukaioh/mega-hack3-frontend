import React, { useState } from 'react'
import { InputBox } from '../InputBox/InputBox'
import Input from '../Input/Input'

const isValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export const Email = ({ label, placeholder, subtitle, name, onChange }) => {
  return (
    <InputBox label={label} subtitle={subtitle}>
      <Input 
        type="email" 
        onChange={onChange} 
        name={name} 
        placeholder={placeholder}
        validation={isValid}
      />
    </InputBox>
  )
}
