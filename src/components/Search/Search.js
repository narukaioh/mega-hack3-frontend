import React from 'react'
import './search.scss'
import SearchIcon from '../../icons/search-icon.svg'

export const Search = ({ label, placeholder }) => {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder} />
      <img src={SearchIcon} alt="search icon" />
    </div>
  )
}
