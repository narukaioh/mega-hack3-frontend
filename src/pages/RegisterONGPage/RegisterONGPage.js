import React, { useState, useEffect } from 'react'
import './register-ong-page.scss'
import { getProducts } from '../../services/getProducts'

export const RegisterONGPage = () => {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts("fralda").then(res => {
      setProducts(res)
    })
  }, [])

  return (
    <div className="container">
      Ola mundo!
      { products }
    </div>
  );
}
