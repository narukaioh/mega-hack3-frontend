import React from 'react'
import './input-box.scss'

export const InputBox = ({ label, children, subtitle }) => {
  return (
    <div className="input-box">
      <label>{label}</label>
      <p>{subtitle}</p>
      {children}
    </div>
  )
}
