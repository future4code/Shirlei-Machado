import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import {AreaRestrita, ButtonLogin, BoxEmail, BoxSenha} from '../LoginPage/style';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:shirlei-julian/login";

const LoginPage = props => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const body = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post(`${baseUrl}/login`, body);

      localStorage.setItem("token", response.data.token);
      history.push("/secret");
    } catch (e) {
      alert("Login falhou :(");
    }
  };

//   const handleLogout = () => {
//     localStorage.clear();
//   };

  return (
    <AreaRestrita>
        <BoxEmail>
            <input
                value={email}
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
                type="email"
            />
        </BoxEmail>
        <BoxSenha>
            <input
                value={password}
                placeholder="Senha"
                onChange={e => setPassword(e.target.value)}
                type="password"
            />
        </BoxSenha>
        
      <ButtonLogin onClick={handleLogin}>Login</ButtonLogin>
     
    </AreaRestrita>
  );
};

 export default LoginPage;
