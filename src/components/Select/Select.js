import React, { useState, useEffect } from 'react'
import './select.scss'
import ChevronDown from '../../icons/chevron-down-ico.svg'

export const Select = ({ options }) => {

  const [selectValue, setSelectValue] = useState({ value: '', label: '' })
  
  const handlerOnChange = (e) => {
    setSelectValue({
      value: e.target.value,
      label: e.target.value
    })
  }

  useEffect(() => {
    setSelectValue(options[0])
  },{})

  return (
    <div className="select-container">
      <select onChange={handlerOnChange}>
        {options.map(option => <option value={option.value}>{option.label}</option>)}
      </select>
      <div className="select-display-value">{ selectValue.label }</div>
      <span className="select-chevron-bottom bottom">
        <img src={ChevronDown} alt="chevron down" />
      </span>
    </div>
  )
}
