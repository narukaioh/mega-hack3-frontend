import React from 'react'
import { Tags } from '../Tags/Tags'
import { Tag } from '../Tag/Tag'
import { NavLink } from 'react-router-dom'
import './needs.scss'
import { IconLabel } from '../IconLabel/IconLabel'
import LocaleIcon from '../../icons/locale-icon.svg'
import TagIcon from '../../icons/tag-icon.svg'

export const Needs = ({ content }) => {
  const { id, image, name, description, tags, locale, subject } = content
  return (
    <li className="needs-item">
      <div className="needs-item-header">
        <img src={image} alt={name} />
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <Tags>
        {tags.map(tag => <Tag label={tag} />)}
      </Tags>
      <div className="needs-item-footer">
        <div>
          <IconLabel icon={LocaleIcon} label={locale} />
          <IconLabel icon={TagIcon} label={locale} />
        </div>
        <div>
          <NavLink to={`/ong/${id}`} className="btn secondary small">Ver mais</NavLink>
        </div>
      </div>
    </li>
  )
}
