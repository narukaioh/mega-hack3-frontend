import React, { useState, useEffect } from 'react'
import './home.scss'
import { getProducts } from '../../services/getProducts'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts("fralda").then(res => {
      setProducts(res)
    })
  }, [])

  return (
    <div className="container">
      <header className="header-home">
        <NavLink className="btn default" to="/donate">Sou doador</NavLink>
        <NavLink className="btn light" to="/ongs">Sou ONG</NavLink>
      </header>
    </div>
  );
}
