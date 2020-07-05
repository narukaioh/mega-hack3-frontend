import React from "react";
import { Card } from "../../components/Card/Card";
import { Input } from "../../components/Input/Input";
import { ButtonSecondary } from "../../components/ButtonSecondary/ButtonSecondary";
import "./donate-page.scss";

export const DonatePage = () => {
  return (
    <div className="container donate-page">
      <Card>
        <h2 className="page-title">Agradecemos a Contribuição</h2>
        <p className="page-description">
          Coloque o identificador da compra para podermos garantir a quantidade e a data de entrega.
        </p>
        <Input label="Identificador de compra" placeholder="Ex.: #2312345" />
        <div className="donate-footer">
          <ButtonSecondary label="Salvar" />
        </div>
      </Card>
    </div>
  );
};
