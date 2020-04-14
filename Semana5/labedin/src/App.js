import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import FotoPerfil from './imagens/eu.jpg';
import FotoEmail from './imagens/email.png';
import FotoAddress from './imagens/address.png';
import LogoLbn from './imagens/labenulogo.png';
import LogoUnime from './imagens/unime.png';




function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPerfil}
          nome="Schiu Freitas" 
          descricao="Oi, me chamo Shirlei, mas prefiro ser chamada de Schiu, sou baiana, jornalista, designer e mãe :)"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
        imagem={FotoEmail}
        textoNegrito="Email: "
        descricao="schiufreitas@gmail.com "
        />
                
        <CardPequeno
        imagem={FotoAddress}
        textoNegrito="Endereço: "
        descricao="Av Labenu "
        />
  
</div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= {LogoLbn} 
          nome="Labenu" 
          descricao="Estudante de Desenvolvimento de Aplicações Web FullStack " 
        />
        
        <CardGrande 
          imagem= {LogoUnime}
          nome="Unime" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
