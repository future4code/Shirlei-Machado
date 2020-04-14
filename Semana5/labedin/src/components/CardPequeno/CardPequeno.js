import React from 'react';
import './CardPequeno.css';

function CardPequeno(props){
    return (
    
    <div className="container">
    
             <img src={ props.imagem } />    
                <p><b>{ props.textoNegrito }</b>
                        { props.descricao}</p>
               
     </div>
      

        
    )
}



export default CardPequeno;