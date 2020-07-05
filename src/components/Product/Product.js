import React from 'react'
import './product.scss'

export const Product = ({ content }) => {
  const { image, title, price } = content
  return (
    <div className="product-container">
      <img src={image} alt={title} />
      <div className="product-description">
        <h3>{title}</h3>
        <span>{price}</span>
      </div>
    </div>)
}
