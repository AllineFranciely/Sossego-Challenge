import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigateBar from '../../components/NavigateBar/NavigateBar';
import './IdUser.css';

function IdUser() {

  const navigate = useNavigate();

  const [IdState, setIdState] = useState({
    nome: '',
    senha: '',
    email: '',
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
    <div className="pageUserId">
      <div className="boxUserId">
        <h1>Criação de usuário</h1>
        <NavigateBar />
        <form className="Form">
          <div className="formName">
          <p>Nome</p>
          <input
            type="text"
            className="InputName"
            name="nome"
            value={nome}
            onChange={handleChange}
          />
          </div>
          <div className="senha">
          <div className="formSenha">
          <p>Senha</p>
          <input
            type="password"
            className="InputPassword"
            name="senha"
            value={senha}
            onChange={handleChange}
          />
          </div>
          <div className="formSenha">
          <p>Confirmar Senha</p>
          <input
            type="password"
            className="InputPassword"
            name="senha"
            value={senha}
            onChange={handleChange}
          />
          </div>
          </div>
          <div className="emailBirth">
          <div className="formEmail">
          <p>Email</p>
          <input
            type="text"
            className="InputEmail"
            name="email"
            value={email}
            onChange={handleChange}
          />
          </div>
          <div className="formBirth">
          <p>Data de nascimento</p>
          <input
            type="date"
            className="InputBirth"
            name="nascimento"
            value={nascimento}
            onChange={handleChange}
          />
          </div>
          </div>
        </form>
        <button
          type="button"
          className="nextButton"
          onClick={() => navigate('/user-address')}
        >
          Próximo passo
        </button>
      </div>
    </div>
  );
}

export default IdUser;
