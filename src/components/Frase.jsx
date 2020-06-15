import React from 'react'
import styled from '@emotion/styled'
 
const ContenedorFrase = styled.div`
    padding: 50px;
    h1,p {
        font-family: 'Product Sans', Arial;
        color: #fff;
    }
`
const Frase = ({frase}) => {

    // Saber si el objeto esta bacio
    //if(Object.keys(frase).length === 0) return null;

    return ( 

        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>- {frase.author} </p>
        </ContenedorFrase>

     );
}
 
export default Frase;