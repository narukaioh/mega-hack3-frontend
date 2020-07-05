import React from 'react'
import './search.scss'
import SearchIcon from '../../icons/search-icon.svg'

export const Search = ({ placeholder, onChange }) => {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder} onChange={onChange} />
      <img src={SearchIcon} alt="search icon" />
    </div>
  )
}
