import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './register-ong-page.scss';
// import { getProducts } from '../../services/products';
import { Card } from '../../components/Card/Card';
import { UploadFile } from '../../components/UploadFile/UploadFile';
import { Button } from '../../components/Button/Button';
import { CardIcon } from '../../components/CardIcon/CardIcon';
import { Input } from '../../components/Input/Input';
// import { InputBox } from '../../components/InputBox/InputBox';
// import { Tag } from '../../components/Tag/Tag';
// import { Tags } from '../../components/Tags/Tags';
// import Shop from '../../icons/shop-icon.svg';
import UserIcon from '../../icons/user-icon.svg';
// import Document from '../../icons/document.svg';
import TagIcon from '../../icons/tag-icon.svg';
import FileUpload from '../../icons/file-upload-icon.svg';
// import { ButtonSecondary } from '../../components/ButtonSecondary/ButtonSecondary';
// import { InputRange } from '../../components/InputRange/InputRange';
import { InputIcon } from '../../components/InputIcon/InputIcon';
import { TextArea } from '../../components/TextArea/TextArea';
// import { ButtonMercadoLivre } from '../../components/ButtonMercadoLivre/ButtonMercadoLivre';
import { CheckButton } from '../../components/CheckButton/CheckButton';
// import { Select } from '../../components/Select/Select';
// import { ButtonDefault } from '../../components/ButtonDefault/ButtonDefault';
// import { ButtonLight } from '../../components/ButtonLight/ButtonLight';
// import { Search } from '../../components/Search/Search';
// import { Product } from '../../components/Product/Product';
// import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';

export const RegisterONGPage = () => {
  const [state, setState] = useState({
    id: '',
    name: '',
    image: '',
    cnpj: '',
    description: '',
    cep: '',
    state: '',
    city: '',
    street: '',
    number: '',
    complement: '',
    link: '',
    email: '',
    password: '',
    bank: '',
    account: '',
    agency: '',
    subject: '',
    products: [],
    billets: [],
    tag: '',
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  return (
    <div className="container ong-form-page">
      <div className="header-back">
        <NavLink className="primary" to="/">Voltar para home</NavLink>
      </div>
      <Card title="Informações da ONG">
        <div className="image-name">
          <UploadFile
            onChange={handleChange.bind(this)}
            name="image"
            label="Logo ou foto"
          />
          <Input onChange={handleChange.bind(this)} name="name" label="Nome da instituição*" />
        </div>
        <InputIcon onChange={handleChange.bind(this)} name="cause" icon={TagIcon} label="Causa/assunto da ONG*" />
        <TextArea onChange={handleChange.bind(this)} name="description" label="Descrição*" />
        <Input onChange={handleChange.bind(this)} name="email" label="Email*" />
        <div className="cep-state">
          <Input onChange={handleChange.bind(this)} name="cep" label="CEP*" />
          <Input onChange={handleChange.bind(this)} name="state" label="Estado*" />
        </div>
        <Input onChange={handleChange.bind(this)} name="city" label="Cidade*" />
        <Input onChange={handleChange.bind(this)} name="street" label="Endereço*" />
        <div className="number-complement">
          <Input onChange={handleChange.bind(this)} name="number" label="Número*" />
          <Input onChange={handleChange.bind(this)} name="complement" label="Complemento" />
        </div>
        <InputIcon onChange={handleChange.bind(this)} name="link" icon={FileUpload} label="Link da instituição" />
      </Card>

      <CardIcon icon={UserIcon}>
        <Input label="Função do voluntário" />
        <TextArea onChange={handleChange.bind(this)} label="Descrição" />
        <div className="radio-button-inline">
          <CheckButton name="voluntario" onChange={handleChange.bind(this)}>Presencial</CheckButton>
          <CheckButton name="voluntario" onChange={handleChange.bind(this)} checked="checked">Online</CheckButton>
        </div>
      </CardIcon>

      <hr />

      <Button label="Adicionar outro voluntário" />

    </div>
  );
};
