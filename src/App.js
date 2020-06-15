import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import Frase from './components/Frase'

const Contenedor = styled.div`
  display:flex;
  align-items: center;
  padding-top:5rem;
  flex-direction: column;
`

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  color: #fff;
  padding: 1rem 3rem;
  margin-top: 3rem;
  border: 2px solid #000;
  font-family: 'Product Sans', Arial;
  font-size: 30px;
  outline:none;
  cursor:pointer;
`;

function App() {

  const [frase, setFrase] = useState({})
  
  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')   
    const frase = await api.json()
    setFrase(frase[0])
  }

  //cargar una frase
  useEffect(() => {
    consultarAPI()
  }, [])

  return ( 
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton
        onClick={consultarAPI}
      >
        Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
