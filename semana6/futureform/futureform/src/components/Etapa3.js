import React from "react";


export class Etapa1 extends React.Component{

    render() {
      return <div>
        <h1>Etapa 3 - Informações Gerais De Ensino</h1>

         <label>5. Por que você não terminou um curso de graduação?</label>
         <input placeholder={'h1'}/>
         <label>6. Você fez algum curso complementar?
          <select>
            <option>Nenhum</option>
            <option>Curso Técnico</option>
            <option>Curso de Inglês</option>
          </select>
        </label>
        
        <button>Próxima Etapa</button>
      </div>
    }
  }
  export default Etapa1;