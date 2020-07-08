import React from 'react'
import './search.scss'
import SearchIcon from '../../icons/search-icon.svg'

export const Search = ({ placeholder, onChange, name}) => {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder} onChange={onChange} />
      <img src={SearchIcon} name={name} alt="search icon" />
    </div>
  )
}
