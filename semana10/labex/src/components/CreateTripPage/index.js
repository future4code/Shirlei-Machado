import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import {FormWrapper, } from '../CreateTripPage/style';


const useForm = initialValues => {
  const [form, setForm] = useState(initialValues);

  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const resetForm = () => {
    setForm(initialValues);
  };

  return { form, onChange, resetForm };
};

export default function App() {
  const { form, onChange, resetForm } = useForm({
    nome: "",
    idade: "",
    email: "",
    cpf: ""
  });

  const handleInputChange = event => {
    const { value, name } = event.target;

    onChange(name, value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    console.log(form);
  };

  return (
    <div className="App">
      <FormWrapper onSubmit={handleSubmit}>
        <TextField
          value={form.nome}
          onChange={handleInputChange}
          name="nome"
          type="text"
          inputProps={{ 
            pattern: "[A-Za-z ]{3,}", 
            title: "O nome deve conter 3 letras no mínimo" }}
          placeholder="Nome"
          required
        />
        <TextField
          value={form.idade}
          onChange={handleInputChange}
          name="idade"
          type="number"
          min="18"
          placeholder="Idade"
          required
        />
        <TextField
          value={form.email}
          onChange={handleInputChange}
          name="email"
          type="email"
          placeholder="E-mail"
          required
        />
        <TextField
          value={form.destino}
          onChange={handleInputChange}
          name="destino"
          type="text"
          placeholder="Destino"
          required
        />
        <button>Enviar</button>
        <button onClick={resetForm}>Limpar tudo</button>
      </FormWrapper>
    </div>
  );
}
