import React from "react";
import { NavLink } from 'react-router-dom'
import { IconLabel } from '../IconLabel/IconLabel'
import LocaleIcon from '../../icons/locale-icon.svg'
import TagIcon from '../../icons/tag-icon.svg'
import "./needs.scss";

export const NeedsFooter = ({ content }) => {
  const { id, locale, subject } = content;
  return (
    <div className="needs-item-footer">
      <div>
        <IconLabel icon={LocaleIcon} label={locale} />
        <IconLabel icon={TagIcon} label={subject} />
      </div>
      <div>
        <NavLink to={`/ong/${id}`} className="btn secondary small">
          Ver mais
        </NavLink>
      </div>
    </div>
  );
};
