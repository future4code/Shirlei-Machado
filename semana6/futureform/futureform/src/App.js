import React from 'react';
import styled from 'styled-components';
import {Etapa1} from "./components/Etapa1.js";



  class App extends React.Component {

    state = {
      etapa: 1,
    }
    
    render () {
        return (
          <div>
            <button>Próxima Etapa</button>
          </div>
        );
      }


export default App;