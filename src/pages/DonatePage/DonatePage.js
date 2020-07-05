import React from "react";
import { Card } from "../../components/Card/Card";
import { Input } from "../../components/Input/Input";
import { ButtonSecondary } from "../../components/ButtonSecondary/ButtonSecondary";
import "./donate-page.scss";

export const DonatePage = () => {
  return (
    <div className="container donate-page">
      <Card>
        <h2 className="page-title">Necessidades</h2>
        <p className="page-description">
          Essas são as necessidades que a instituição pede contribuição. Caso clique numa delas verá um lista com todos que tem esta mesma necessidade.
        </p>
        <Input label="Identificador de compra" placeholder="Digite aqui" />
        <div className="donate-footer">
          <ButtonSecondary label="Salvar" />
        </div>
      </Card>
    </div>
  );
};
