import React, { useState, useEffect } from 'react';
import './register-ong-page.scss';
import { getProducts } from '../../services/products';
import { Card } from '../../components/Card/Card';
import { UploadFile } from '../../components/UploadFile/UploadFile';
import { Button } from '../../components/Button/Button';
import { CardIcon } from '../../components/CardIcon/CardIcon';
import { Input } from '../../components/Input/Input';
import { InputBox } from '../../components/InputBox/InputBox';
import { Tag } from '../../components/Tag/Tag';
import { Tags } from '../../components/Tags/Tags';
import Shop from '../../icons/shop-icon.svg';
import CloseIcon from '../../icons/close-icon.svg';
import Document from '../../icons/document.svg';
import TagIcon from '../../icons/tag-icon.svg';
import FileUpload from '../../icons/file-upload-icon.svg';
import { ButtonSecondary } from '../../components/ButtonSecondary/ButtonSecondary';
import { InputRange } from '../../components/InputRange/InputRange';
import { InputIcon } from '../../components/InputIcon/InputIcon';
import { TextArea } from '../../components/TextArea/TextArea';
import { ButtonMercadoLivre } from '../../components/ButtonMercadoLivre/ButtonMercadoLivre';
import { CheckButton } from '../../components/CheckButton/CheckButton';
import { Select } from '../../components/Select/Select';
import { ButtonDefault } from '../../components/ButtonDefault/ButtonDefault';
import { ButtonLight } from '../../components/ButtonLight/ButtonLight';
import { Search } from '../../components/Search/Search';
import { Product } from '../../components/Product/Product';
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';

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

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
    console.log(state)
  }

  const [length, setLength] = useState(0)

  const handlerOnDescriptionChange = (e) => {
    setLength(e.target.value.length)
    handleChange(e)
  }

  return (
    <div className="container ong-form-page">
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
        <TextArea length={length} onChange={handlerOnDescriptionChange.bind(this)} name="description" label="Descrição*" />
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

      <Card title="Recebimento">
        <Input onChange={handleChange.bind(this)} name="cnpj" label="CNPJ" />
        <Input onChange={handleChange.bind(this)} name="bank" label="Banco" />
        <div className="number-complement">
          <Input onChange={handleChange.bind(this)} name="account" label="Conta" />
          <Input onChange={handleChange.bind(this)} name="agency" label="Agência" />
        </div>
      </Card>

      <Card title="Necessidades">
        <Input
          label="Palavra-chave"
          name="tags"
          onChange={handleChange.bind(this)}
          subtitle="Digite as palavras, separada por vírgula (,) e aperte enter para adicioná-las. Limite de até 15 palavras."
        />
        { state.tags ?
          <Tags>
            {state.tags.split(',').map((tag) => (
              <Tag label={tag} />
            ))}
          </Tags> : ''
        }
      </Card>

      <hr />

      <ButtonSecondary label="Salvar" />

      {/* 
      <Card title="Escolher produtos">
        <InputBox
          label="Palavra-chave"
          subtitle="Digite as palavras, separada por vírgula (,) e aperte enter para adicioná-las. Limite de até 15 palavras."
        ></InputBox>
        <ButtonMercadoLivre label="Mercado Livre" />
      </Card> */}

      <CardIcon icon={Shop}>
        <Input label="Nome do produto" />
        <InputRange label="Quantidade" />
        <TextArea label="Descrição" />
        <Search placeholder="Pesquisar" />
        <ul className="product-grid-scroll">
          {[
            { image: "", title: "Produto", price: "R$ 25,90" },
            { image: "", title: "Produto", price: "R$ 25,90" },
          ].map((product) => (
            <Product content={product}>
              <ButtonIcon icon={CloseIcon} className="close" />
            </Product>
          ))}
        </ul>
      </CardIcon>

      <hr />
      <Button label="Salvar produto" />

      <CardIcon icon={Document}>
        <div className="image-name">
          <UploadFile label="Boleto" />
          <Input label="Identificação do Boleto*" />
        </div>
        <Input label="Nome do Produto*" />
        <TextArea label="Descrição" />
        <div className="number-complement">
          <Input label="Validade" />
          <Input label="Valor" />
        </div>
      </CardIcon>

      <hr />
      <Button label="Salvar Boleto" />
    </div>
  );
};
