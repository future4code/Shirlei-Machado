import React, {useState} from "react";
import {Title, ContainerTarefa} from "../Header/style";


function Header() {
  const[adicionarTarefa, setAdicionarTarefa] = useState("");
  const onChangeTarefa = event => {setAdicionarTarefa(event.target.value)};
  const onClickAdicionar = () =>{
    console.log(adicionarTarefa)
  }
  return (
    <ContainerTarefa>
        
        <Title>Meu Planner</Title>
        

            <input type="text"
            placeholder="Nova Tarefa"
            value={adicionarTarefa}
            onChange={onChangeTarefa}
            />

            <select>
                <option value=""></option>
                <option value="segunda">Segunda</option>
                <option value="terca">Terça</option>
                <option value="quarta">Quarta</option>
                <option value="quinta">Quinta</option>
                <option value="sexta">Sexta</option>
                <option value="sabado">Sábado</option>
                <option value="domingo">Domingo</option>
            </select>

          <button onClick={onClickAdicionar}>Criar Tarefa</button>
 
       
    </ContainerTarefa>
  );
}

export default Header;
