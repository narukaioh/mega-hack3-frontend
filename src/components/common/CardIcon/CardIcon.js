import React from 'react'
import './card-icon.scss'
import { Card } from '../Card/Card'

export const CardIcon = ({ children, title, icon, alt }) => {
  return (
    <div className="card-box-icon">
      <Card title={title}>
        <img className="card-icon" src={icon} alt={alt} />
        {children}
      </Card>
    </div>
  )
}
