import React, { useState, useEffect } from 'react'
import './home.scss'
import { getONGs, searchONGs } from '../../services/ongs'
import { NavLink } from 'react-router-dom'
import { Search } from '../../components/Search/Search'
import { Needs } from '../../components/Needs/Needs'
import ActIcon from '../../icons/act-icon.svg'

export const Home = () => {
  
  const [ongs, setONGs] = useState([])

  useEffect(() => {
    getONGs().then(res => setONGs(res))
  }, [])

  const handlerSearch = (e) => {
    searchONGs(e.target.value).then(res => {
      setONGs(res)
    })
  }

  return (
    <div>
      <header className="header-home">
        <nav>
          <div>
            <img src={ActIcon} alt="logo" />
          </div>
          <div>
            <NavLink className="btn default" to="/donate">Sou voluntário</NavLink>
            <NavLink className="btn light" to="/ongs">Sou ONG</NavLink>
          </div>
        </nav>
      </header>
      <section className="content">

        <Search 
          onChange={handlerSearch.bind(this)} 
          placeholder="Causa, local, nome da instituição" 
        />
        
        <ul>
          {ongs.map((ong, i) => <Needs key={i} content={ong} />)}
        </ul>
      </section>
    </div>
  );
}
