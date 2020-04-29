import React from "react";
import styled from "styled-components";
import axios from "axios";

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    box-sizing: border-box;
    margin: 30px auto;
    width: 500px;
    border: 5px solid #dedede;
    background-color:gray;
`;

const BotaoSalvar = styled.button`
    margin-top: 20px;
    width: 30%;
    height: 30px;
    align-self: center;
    background-color: #dedede;
    color:black;
        :hover{
        color: white;
        cursor: pointer;
    
`;
 
const NovoH3 = styled.h3`
      text-align: center;
      color:white;      

`;

export class UserFormPage extends React.Component {
  state = {
    nameValue: "",
    emailValue: ""
  };

  onChangeName = event => {
    this.setState({ nameValue: event.target.value });
  };

  onChangeEmail = event => {
    this.setState({ emailValue: event.target.value });
  };

  onClickCriar = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "shirlei-machado-julian"
          }
        }
      )
      .then(response => {
        window.alert("Usuario criado com sucesso!");
      })
      .catch(error => {
        console.log(error.response);
        window.alert("Erro ao criar usuário!");
      });

    this.setState({ nameValue: "", emailValue: "" });
  };

  render() {
    return (
      <FormContainer>
      <NovoH3>Cadastre-se aqui</NovoH3>
        <input
          placeholder={"Nome"}
          value={this.state.nameValue}
          onChange={this.onChangeName}
        />
        <input
          placeholder={"Email"}
          value={this.state.emailValue}
          onChange={this.onChangeEmail}
        />
        <BotaoSalvar onClick={this.onClickCriar}>CONFIRME</BotaoSalvar>
      </FormContainer>
    );
  }
}
