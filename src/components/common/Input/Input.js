import React, { useState } from 'react'

const Input = ({ type, placeholder, name, onChange, validation }) => {
  const [error, setError] = useState('')

  const handlerOnBlur = (e) => {
    validation(e.target.value) ? setError('') : setError('input-error')
  }

  return (
      <input type={type} className={error} onChange={onChange} onBlur={handlerOnBlur} name={name} placeholder={placeholder} />
  )
}

export default Input
