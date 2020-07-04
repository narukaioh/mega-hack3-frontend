import React from 'react'
import { Button } from './components/Button/Button'
import { Card } from './components/Card/Card'
import { Input } from './components/Input/Input'
import { InputBox } from './components/InputBox/InputBox'

function App() {
  return (
    <div>
      <Card title="Informações da ONG">
        <Button label="Adicionar outro produto" />
        <Input label="Nome" placeholder="Ex.: Fralda, fogão, sabão, conta de luz" />
      </Card>
      <Card>
        <InputBox subtitle="Digite aqui o seu nome completo por favor!" label="Nome">
        </InputBox>
      </Card>
    </div>
  );
}

export default App;
