import React, { useState } from "react";
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
      <Card>
        <h2 className="page-title">Agradecemos a Contribuição</h2>
        <p className="page-description">
          Coloque o identificador da compra para podermos garantir a quantidade e a data de entrega.
        </p>
        <Input onChange={handlerOnChange.bind(this)} label="Identificador de compra" placeholder="Ex.: #2312345" />
        <div className="donate-footer">
          <ButtonSecondary onClick={handlerClick.bind(this)} label="Salvar" />
        </div>
      </Card>
    </div>
  );
};
