import React from 'react'
import './button-icon.scss'

export const ButtonIcon = ({ icon, label, className }) => {
return <button className={className}>{label} <img src={icon} alt="icon" /></button>
}
