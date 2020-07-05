import React from 'react'
import './icon-label.scss'

export const IconLabel = ({ icon, label }) => {
  return (
    <div className="icon-label-content">
      <img src={icon} alt={label} />
      <span>{label}</span>
    </div>)
}
