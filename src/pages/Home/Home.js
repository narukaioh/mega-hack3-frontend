import React from 'react'
import { Card } from '../../components/common/Card/Card'
import RegisterForm from '../../forms/login/LoginForm'

const Home = () => {
  return(
    <div className="container">
      <Card label="Formulário de cadastro" subtitle="Cadastre-se agora mesmo!">
        <RegisterForm />
      </Card>
    </div>
  )
}

export default Home
