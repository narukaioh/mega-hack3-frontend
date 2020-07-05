import React from 'react'
import { Button } from '../../components/Button/Button'
import { Card } from '../../components/Card/Card'
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
import { UploadFile } from '../../components/UploadFile/UploadFile'
import { ButtonMercadoLivre } from '../../components/ButtonMercadoLivre/ButtonMercadoLivre'
import { CheckButton } from '../../components/CheckButton/CheckButton'
import { Select } from '../../components/Select/Select'
import { ButtonDefault } from '../../components/ButtonDefault/ButtonDefault'
import { ButtonLight } from '../../components/ButtonLight/ButtonLight'

export const ComponentsPage = () => {

  const options = [
    {
      value: 'Option label 1',
      label: 'Option label 1'
    },
    {
      value: 'Option label 2',
      label: 'Option label 2'
    }
  ]

  return (
    <div className="container">

      <Card title="Card title component">

        <ButtonDefault label="Button Default" />

        <br />

        <ButtonLight label="Button Light" />
        
        <br />

        <Button label="Button Secondary" />

        <br />

        <ButtonSecondary label="Button Primary" />

        <br />

        <ButtonMercadoLivre label="Button Mercado Livre" />

        <br />

        <UploadFile label="UploadFile label" />

        <br />

        <Select label="Select label" options={options} />

        <InputRange label="InputRange label" subtitle="InputRange subtitle" />

        <InputIcon icon={TagIcon} label="InputIcon label" placeholder="InputIcon placeholder" />
        
        <InputIcon icon={FileUpload} label="InputIcon label" placeholder="InputIcon placeholder" />
        
        <Input label="Input label" placeholder="Input placeholder" />
      </Card>

      <Button label="Button Secondary" />
      <ButtonSecondary label="Button Primary" />

      <CardIcon icon={Shop} alt="Shop" title="Card Icon Title component">
        <InputBox subtitle="InputBox subtitle" label="InputBox label">
        </InputBox>
      </CardIcon>

      <CardIcon icon={Document} alt="Shop">
        <TextArea label="TextArea component" placeholder="TextArea placeholder component" />
        <Tags>
          <Tag label="Tag component 1" />
          <Tag label="Tag component 2" />
          <Tag label="Tag component 3" />
        </Tags>
      </CardIcon>

      <hr />

      <div className="checkbox-group">
        <CheckButton checked={true}>
          CheckButton label 1
        </CheckButton>
        <CheckButton>
          <span>CheckButton label 2 <a href="#">Link</a></span>
        </CheckButton>
      </div>

    </div>
  );
}

