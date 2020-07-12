import React from 'react'

export const Button = ({ label, onClick }) => {
  return <button onClick={onClick} type="button" className="button primary">{label}</button>
}
