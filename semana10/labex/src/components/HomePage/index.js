import React from 'react';
import {useHistory} from "react-router-dom";
import Logo from "../img/logo.png";
import {LogoHome, 
        ButtonLogin, 
        ButtonTrips, 
        HeaderHome, 
        Buttoncontainer, 
        TextoCentral,  } from '../HomePage/style';


function HomePage(props) {
    
    const history = useHistory();

    const LoginUsuario = () => {
        history.push ("/Login");
    };

    const ListTrip = () => {
        history.push("/trips");
    };
    
  return (
    <div >
        <HeaderHome>
            <LogoHome src={Logo} alt= 'Nossa logo'/>
            <h1> Encontre as melhores viagens espaciais!</h1>
        </HeaderHome>
            {/* <BackgroundHome src={Back} alt='Plano de Fundo'/> */}    
         
                    
        <TextoCentral>Inscreva-se agora!</TextoCentral>
                    

            <Buttoncontainer>

                <ButtonLogin onClick ={LoginUsuario}>Area Restrita </ButtonLogin>
                <ButtonTrips onClick ={ListTrip}>Veja nossas viagens</ButtonTrips>

            </Buttoncontainer>
        
        
    </div>
  );
}

export default HomePage;
