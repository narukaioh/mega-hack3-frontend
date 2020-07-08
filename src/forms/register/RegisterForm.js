import React from 'react'
import { Button } from '../../components/common/Button/Button'
import { ButtonSecondary } from '../../components/common/ButtonSecondary/ButtonSecondary'
import { Input } from '../../components/common/Input/Input'
import { Password } from '../../components/common/Password/Password'

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
