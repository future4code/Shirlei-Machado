import React from 'react';
import './CardPequeno.css';

function CardPequeno(props){
    return (
    
    <div className="page-section-container">
    <div>
             <img src={ props.fotoEmail } />    
                <p>{ props.textoNegrito }</p>
                <p>{ props.email }</p>
                
                
            </div>
        </div>

        
    )
}



export default CardPequeno;