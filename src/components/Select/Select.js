import React, { useState, useEffect } from 'react'
import './select.scss'
import ChevronDown from '../../icons/chevron-down-ico.svg'
import { InputBox } from '../InputBox/InputBox'

export const Select = ({ options, label, subtitle}) => {

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
    <InputBox label={label} subtitle={subtitle}>
      <div className="select-container">
        <select onChange={handlerOnChange}>
          {options.map(option => <option value={option.value}>{option.label}</option>)}
        </select>
        <div className="select-display-value">{ selectValue.label }</div>
        <span className="select-chevron-bottom bottom">
          <img src={ChevronDown} alt="chevron down" />
        </span>
      </div>
    </InputBox>
  )
}
