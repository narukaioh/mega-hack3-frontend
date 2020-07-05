import React, { useState, useEffect } from 'react'
import './register-ong-page.scss'
import { getProducts } from '../../services/products'
import { Card } from '../../components/Card/Card'
import { UploadFile } from '../../components/UploadFile/UploadFile'
import { Button } from '../../components/Button/Button'
import { CardIcon } from '../../components/CardIcon/CardIcon'
import { Input } from '../../components/Input/Input'
import { InputBox } from '../../components/InputBox/InputBox'
import { Tag } from '../../components/Tag/Tag'
import { Tags } from '../../components/Tags/Tags'
import Shop from '../../icons/shop-icon.svg'
import Document from '../../icons/document.svg'
import TagIcon from '../../icons/tag-icon.svg'
import FileUpload from '../../icons/file-upload-icon.svg'
import { ButtonSecondary } from '../../components/ButtonSecondary/ButtonSecondary'
import { InputRange } from '../../components/InputRange/InputRange'
import { InputIcon } from '../../components/InputIcon/InputIcon'
import { TextArea } from '../../components/TextArea/TextArea'
import { ButtonMercadoLivre } from '../../components/ButtonMercadoLivre/ButtonMercadoLivre'
import { CheckButton } from '../../components/CheckButton/CheckButton'
import { Select } from '../../components/Select/Select'
import { ButtonDefault } from '../../components/ButtonDefault/ButtonDefault'
import { ButtonLight } from '../../components/ButtonLight/ButtonLight'

export const RegisterONGPage = () => {
  
  const [products, setProducts] = useState([])
  const [listTags, setListTags] = useState([])

  return (
    <div className="container ong-form-page">
      <Card title="Informações da ONG">
        <div className="image-name">
          <UploadFile label="Logo ou foto" />
          <Input label="Nome da instituição*" />
        </div>
        <InputIcon icon={TagIcon} label="Causa/assunto da ONG*" />
        <TextArea label="Descrição*" />
        <div className="cep-state">
          <Input label="CEP*" />
          <Input label="Estado*" />
        </div>
        <Input label="Cidade*" />
        <Input label="Endereço*" />
        <div className="number-complement">
          <Input label="Número*" />
          <Input label="Complemento" />
        </div>
        <InputIcon icon={FileUpload} label="Link da instituição" />
      </Card>

      <Card title="Recebimento">
        <Input label="CNPJ" />
        <Input label="Banco" />
        <div className="number-complement">
          <Input label="Conta" />
          <Input label="Agência" />
        </div>
      </Card>

      <hr />

      <ButtonSecondary label="Salvar" />

      <Card title="Necessidades" >
        <Input label="Palavra-chave" subtitle="Digite as palavras, separada por vírgula (,) e aperte enter para adicioná-las. Limite de até 15 palavras." />
        <Tags>
          {listTags.map(tag => <Tag label={tag} />)}  
        </Tags>
      </Card>

      <Card title="Escolher produtos" >
        <InputBox label="Palavra-chave" subtitle="Digite as palavras, separada por vírgula (,) e aperte enter para adicioná-las. Limite de até 15 palavras.">
        </InputBox>
        <ButtonMercadoLivre label="Mercado Livre" />
      </Card>

    </div>
  );
}
