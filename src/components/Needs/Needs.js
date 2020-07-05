import React from 'react'
import { Tags } from '../Tags/Tags'
import { Tag } from '../Tag/Tag'
import { NeedsHeader } from './NeedsHeader'
import { NeedsFooter } from './NeedsFooter'
import './needs.scss'

export const Needs = ({ content }) => {
  const { id, image, name, description, tags, locale, subject } = content
  return (
    <li className="needs-item">
      <NeedsHeader content={{ image, name, description }} />
      { tags ? 
      <Tags>
        {tags.map(tag => <Tag label={tag} />)}
      </Tags>
      : '' }
      <NeedsFooter content={{ id, locale, subject }} />
    </li>
  )
}
