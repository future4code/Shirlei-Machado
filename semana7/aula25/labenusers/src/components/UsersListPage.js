import React from "react";
import styled from "styled-components";
import axios from "axios";

const UserItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin: 30px auto;
    padding: 10px;
    background-color:gray;
    color:white;
    border: 5px solid #dedede;
    width:500px;
`;
 
const NovoH1 = styled.h1`
    text-align: center;
    color: gray
`;

const NovoButton = styled.button`
    color:red;
    background-color:gray;
    border:none;
     :hover{
        cursor: pointer;   
`;


export class UsersListPage extends React.Component {
  state = {
    usersList: []
  };

  componentDidMount() {
    this.getUsersList();
  }

  getUsersList = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "shirlei-machado-julian"
          }
        }
      );

      this.setState({ usersList: response.data });
    } catch (error) {
      console.log(error.response);
    }
  };

  onClickDeleteUser = userId => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        {
          headers: {
            Authorization: "shirlei-machado-julian"
          }
        }
      )
      .then(response => {
        window.alert("Usuario deletado com sucesso");
        this.getUsersList();
      })
      .catch(error => {
        window.alert("Deu um erro :(");
      });
  };

  render() {
    return (
      <div>
        <NovoH1>Lista de Usuários</NovoH1>
        <div>
          {this.state.usersList.map(user => {
            return (
              <UserItem>
                <p>{user.name}</p>
                <NovoButton onClick={() => this.onClickDeleteUser(user.id)}>
                  X
                </NovoButton>
              </UserItem>
            );
          })}
        </div>
      </div>
    );
  }
}
