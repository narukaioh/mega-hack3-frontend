import React from 'react'
import { Card } from '../../components/Card/Card'
import RegisterForm from '../../forms/register/RegisterForm'

const Home = () => {
  return(
    <Card label="Formulário de cadastro" subtitle="Cadastre-se agora mesmo!">
      <RegisterForm />
    </Card>
  )
}

export default Home
