import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { Card } from "../../components/Card/Card";
import { Input } from "../../components/Input/Input";
import { ButtonSecondary } from "../../components/ButtonSecondary/ButtonSecondary";
import { postSaleId } from '../../services/donate'

import "./donate-page.scss";

export const DonatePage = () => {
  
  const [saleId, setSaleId] = useState()

  const handlerOnChange = (e) => {
    setSaleId(e.target.value)
  }

  const handlerClick = (e) => {
    e.preventDefault()
    postSaleId(saleId)
  }

  return (
    <div className="container donate-page">
      <div className="header-back">
        <NavLink className="primary" to="/">Voltar para home</NavLink>
      </div>
      <Card>
        <h2 className="page-title">Agradecemos a Contribuição</h2>
        <Input onChange={handlerOnChange.bind(this)} label="Nome" />
        <Input onChange={handlerOnChange.bind(this)} label="Email" />
        <div className="donate-footer">
          <ButtonSecondary onClick={handlerClick.bind(this)} label="Salvar" />
        </div>
      </Card>
    </div>
  );
};
