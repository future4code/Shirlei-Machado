import React from "react";
import { UserFormPage } from "./components/UserFormPage";
import { UsersListPage } from "./components/UsersListPage";


class App extends React.Component {
  state = {
    currentPage: "LIST"
  };

  onClickChangePage = () => {
    const nextPage = this.state.currentPage === "FORM" ? "LIST" : "FORM";

    this.setState({ currentPage: nextPage });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.onClickChangePage}>
          {this.state.currentPage === "FORM"
          ? "Ir para Lista de Usuários"
            : "Ir para Cadastro"}
        </button>
        {this.state.currentPage === "FORM" ? (
          <UserFormPage />
        ) : (
          <UsersListPage />
        )}
      </div>
    );
  }
}

export default App;
