import React from 'react'
import './check-button.scss'

export const CheckButton = ({value, name, children, checked}) => {
  return (
    <div className="checkbox-container"> 
      <div className="checkbox-input">
        <input type="checkbox" name={name} checked={checked} value={value} />
        <span className="checkmark"></span>
      </div>
      <div className="checkbox-label">{children}</div>
    </div>
  )
}
