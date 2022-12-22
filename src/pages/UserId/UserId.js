import React, { useState } from 'react';
import NavigateBar from '../../components/NavigateBar/NavigateBar';

function UserId() {

  const [IdState, setIdState] = useState({
    nome:'',
    senha: '',
    email:  '',
    nascimento: '',
  });
  const { nome, senha, email, nascimento } = IdState;

  const handleChange = ({ target }) => {
    const { name } = target;
    let { value } = target;

    setIdState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div>
      <h1>Criação de usuário</h1>
      <NavigateBar />
      <form>
        <p>Nome</p>
        <input
        type="text"
        className="InputName"
        name="nome"
        value={nome}
        onChange={handleChange}
        />
        <p>Senha</p>
        <input
        type="password"
        className="InputPassword"
        name="senha"
        value={senha}
        onChange={handleChange}
        />
        <p>Confirmar Senha</p>
        <input
        type="password"
        className="InputPasswordConfirm"
        name="senha"
        value={senha}
        onChange={handleChange}
        />
        <p>Email</p>
        <input
        type="text"
        className="InputEmail"
        name="email"
        value={email}
        onChange={handleChange}
        />
        <p>Data de nascimento</p>
        <input
        type="date"
        className="InputBirth"
        name="nascimento"
        value={nascimento}
        onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default UserId;
