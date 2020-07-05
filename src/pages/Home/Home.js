import React, { useState, useEffect } from 'react'
import './home.scss'
import { getONGs } from '../../services/getONGs'
import { NavLink } from 'react-router-dom'
import { Search } from '../../components/Search/Search'
import { Needs } from '../../components/Needs/Needs'

export const Home = () => {
  
  const [needId, setNeedId] = useState([])
  const [needsList, setNeedsList] = useState([])

  const fetchAllONGs = async () => {
    const needs = await getONGs()
    setNeedsList(needs)
  }

  useEffect(() => {
    fetchAllONGs()
  }, [needId])

  return (
    <div>
      <header className="header-home">
        <nav>
          <NavLink className="btn default" to="/donate">Sou doador</NavLink>
          <NavLink className="btn light" to="/ongs">Sou ONG</NavLink>
        </nav>
        <div className="banner">
          <h1>Doe para ONG com a certeza de que sua doação fez a diferença.</h1>
        </div>
      </header>
      <section className="content">
        <Search placeholder="Causa, local, nome da instituição" />
        <ul>
          {needsList.map(item => <Needs content={item} />)}
        </ul>
      </section>
    </div>
  );
}
