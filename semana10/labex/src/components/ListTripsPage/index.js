import React from 'react';
import {useHistory} from "react-router-dom";
import {  } from '../HomePage/style';

function ListTripsPage (props) {

    const history = useHistory();

    const LoginUsuario = () => {
        history.push ("/Login");
    };

    const ListTrip = () => {
        history.push("/trips");
    };
    return(
        <div>
            <h1>Lista de Viagens </h1>
        </div>
    )
}