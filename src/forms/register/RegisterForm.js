import React from 'react'
import { Button } from '../../components/Button/Button'
import { ButtonSecondary } from '../../components/ButtonSecondary/ButtonSecondary'
import { Input } from '../../components/Input/Input'
import { Password } from '../../components/Password/Password'

const RegisterForm = () => {
  return (
    <form className="register-form-container">
      <Input name="email" label="Email" />
      <Password name="password" label="Senha" />
      <Button label="Enviar" />
      <ButtonSecondary label="Limpar" />
    </form>
  )
}

export default RegisterForm
