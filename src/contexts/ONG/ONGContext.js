import React, { createContext, useState, useContext, useEffect } from 'react';
import { getONGs, searchONGs } from '../../services/ongs'

const OngContext = createContext()

export default function ONGProvider ({ children }) {
  const [ong, setOng] = useState({})
  
  // useEffect(() => {
  //   async function fetchONGs () {
  //     return await getONGs()
  //   }
  //   setOng(fetchONGs())
  // }, []);

  return (
    <OngContext.Provider value={{
      ong,
      setOng
    }}>
      { children }
    </OngContext.Provider>
  )
}

export function useONG () {
  const context = useContext(OngContext)
  const { ong, setOng } = context
  console.log(ong)
  return { ong, setOng }
}
