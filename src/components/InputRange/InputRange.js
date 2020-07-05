import React, { useState } from 'react'
import './input-range.scss'
import { InputBox } from '../InputBox/InputBox'

export const InputRange = ({ label, subtitle, name }) => {

  const [rangeValue, setRangeValue] = useState(50)

  let selectorStyle = {
    left: `calc(${rangeValue}% - 13px)`
  }

  let progressStyle = {
    width: `${rangeValue}%`
  }

  const handlerOnInput = (event) => {
    setRangeValue(event.target.value)
  }

  return (
    <InputBox label={label} subtitle={subtitle}>
      <div className="range-container">
        <input type="range" min="0" max="100" name={name} value={rangeValue} spet="1" onChange={handlerOnInput} />
        <div className="range-selector" style={selectorStyle}>
          <button className="range-button"></button>
          <span className="range-value">{rangeValue}</span>
        </div>
        <div className="range-progress" style={progressStyle}></div>
      </div>
    </InputBox>
  )
}
