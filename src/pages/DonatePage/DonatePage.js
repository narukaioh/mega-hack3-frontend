import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import { CardIcon } from "../../components/CardIcon/CardIcon";
import { Input } from "../../components/Input/Input";
import { InputBox } from "../../components/InputBox/InputBox";
import { Tag } from "../../components/Tag/Tag";
import { Tags } from "../../components/Tags/Tags";
import Shop from "../../icons/shop-icon.svg";
import Document from "../../icons/document.svg";
import TagIconOrange from "../../icons/tag-icon-orange.svg";
import FileUpload from "../../icons/file-upload-icon.svg";
import { ButtonSecondary } from "../../components/ButtonSecondary/ButtonSecondary";
import { InputRange } from "../../components/InputRange/InputRange";
import { InputIcon } from "../../components/InputIcon/InputIcon";
import { TextArea } from "../../components/TextArea/TextArea";
import { UploadFile } from "../../components/UploadFile/UploadFile";
import { ButtonMercadoLivre } from "../../components/ButtonMercadoLivre/ButtonMercadoLivre";
import { CheckButton } from "../../components/CheckButton/CheckButton";
import { Select } from "../../components/Select/Select";
import { ButtonDefault } from "../../components/ButtonDefault/ButtonDefault";
import { ButtonLight } from "../../components/ButtonLight/ButtonLight";
import { getONG } from "../../services/getONGs";
import { NeedsHeader } from "../../components/Needs/NeedsHeader";
import { Address } from "../../components/Address/Address";
import { IconLabel } from "../../components/IconLabel/IconLabel";
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
