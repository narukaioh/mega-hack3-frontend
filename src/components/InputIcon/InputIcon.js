import React from 'react'
import './input-icon.scss'
import { InputBox } from '../InputBox/InputBox'

export const InputIcon = ({ label, icon, placeholder }) => {
  return (
    <InputBox label={label}>
      <div className="input-icon-container">
        <span><img src={icon} alt="icon" /></span>
        <input type="text" placeholder={placeholder} />
      </div>
    </InputBox>
  )
}
