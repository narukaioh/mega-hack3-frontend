import React from 'react'
import './icon-label.scss'

export const IconLabel = ({ icon, label, children }) => {
  return (
    <div className="icon-label-content">
      <img src={icon} alt={label} />
      <span>{children ? children : label}</span>
    </div>)
}
