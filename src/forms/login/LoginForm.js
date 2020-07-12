import React, { useState } from 'react'
import { Button } from '../../components/common/Button/Button'
import { ButtonSecondary } from '../../components/common/ButtonSecondary/ButtonSecondary'
import { Password } from '../../components/common/Password/Password'
import { Email } from '../../components/common/Email/Email'
import axios from 'axios'

const LoginForm = () => {
  
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const handlerChange = (e) => {
    const value = e.target.value
    setCredentials({
      ...credentials,
      [e.target.name]: value
    })
  }

  const handlerClick = (e) => {
    e.preventDefault()
    axios.get('/login', {
      baseURL: 'http://localhost:8080',
      headers: {
        Authorization: `Basic ${(btoa(`${credentials.email}:${credentials.password}`))}`
      }
    })
    .then(res => res.data)
    .then(res => console.log(res.token))
  }

  const clear = (e) => {
    setCredentials({ email: '', password: '' })
  }

  return (
    <form className="register-form-container">
      <Email 
        onChange={(e) => handlerChange(e)}
        name="email" 
        label="Email" 
      />
      
      <Password 
        onChange={(e) => handlerChange(e)}
        name="password" 
        label="Senha" 
      />

      <Button onClick={(e) => handlerClick(e)} label="Enviar" /> <ButtonSecondary onClick={(e) => clear(e)} label="Limpar" />

    </form>
  )
}

export default LoginForm
