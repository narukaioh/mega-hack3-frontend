import React from 'react'

import Shop from '../../icons/shop-icon.svg'
import Document from '../../icons/document.svg'
import TagIcon from '../../icons/tag-icon.svg'
import FileUpload from '../../icons/file-upload-icon.svg'

import { Button } from '../../components/common/Button/Button'
import { Card } from '../../components/common/Card/Card'
import { CardIcon } from '../../components/common/CardIcon/CardIcon'
import { Input } from '../../components/common/Input/Input'
import { InputBox } from '../../components/common/InputBox/InputBox'
import { Tag } from '../../components/common/Tag/Tag'
import { Tags } from '../../components/common/Tags/Tags'
import { ButtonSecondary } from '../../components/common/ButtonSecondary/ButtonSecondary'
import { InputRange } from '../../components/common/InputRange/InputRange'
import { InputIcon } from '../../components/common/InputIcon/InputIcon'
import { TextArea } from '../../components/common/TextArea/TextArea'
import { UploadFile } from '../../components/common/UploadFile/UploadFile'
import { CheckButton } from '../../components/common/CheckButton/CheckButton'
import { Select } from '../../components/common/Select/Select'
import { ButtonInfo } from '../../components/common/ButtonInfo/ButtonInfo'
import { ButtonLight } from '../../components/common/ButtonLight/ButtonLight'

import RegisterForm from '../../forms/register/RegisterForm'

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

      <Card title="Register Form">
        <RegisterForm />
      </Card>

      <Card title="Card title component">

        <ButtonInfo label="Button Info" />

        <br />

        <ButtonLight label="Button Light" />
        
        <br />

        <Button label="Button Secondary" />

        <br />

        <ButtonSecondary label="Button Primary" />

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
          <span>CheckButton label 2 <a href="#todo">Link</a></span>
        </CheckButton>
      </div>

    </div>
  );
}

