import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigateBar from '../../components/NavigateBar/NavigateBar';
import './IdUser.css';

function IdUser() {

  const navigate = useNavigate();

  const [userName, setUserName] = useState({
    nome: '',
  });
  const [userEmail, setUserEmail] = useState({
    email: '',
  });
  const [senha, setSenha] = useState('');
  const [senhaConfirm, setSenhaConfirm] = useState('');
  const [nascimento, setNascimento] = useState('');

  function handleOnChange({ target }) {
    const { type, value } = target;
    if (type === 'text') {
      setUserName(({
        nome: value,
      }));
    } else if (type === 'email') {
      setUserEmail(({
        email: value,
      }));
    } else if (type === 'password') {
      setSenha(value);
    } else if (type === 'date') {
      setNascimento(value);
    }
  }

  function handleClick() {
    localStorage.setItem('userName', JSON.stringify(userName));
    localStorage.setItem('userEmail', JSON.stringify(userEmail));
    console.log(userName);
    navigate('/user-address')
  }

  return (
    <div className="pageUserId">
      <div className="boxUserId">
        <h1 className="titleID">Criação de usuário</h1>
        <NavigateBar />
        <form className="Form">
          <div className="formName">
          <p>Nome</p>
          <input
            type="text"
            className="InputName"
            name="nome"
            value={userName.nome}
            onChange={handleOnChange}
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
            onChange={handleOnChange}
          />
          </div>
          <div className="formSenha">
          <p>Confirmar Senha</p>
          <input
            type="password"
            className="InputPassword"
            name="senhaConfirm"
            value={senhaConfirm}
            onChange={(event) => setSenhaConfirm(event.target.value)}
          />
          </div>
          </div>
          <div className="emailBirth">
          <div className="formEmail">
          <p>Email</p>
          <input
            type="email"
            className="InputEmail"
            name="email"
            value={userEmail.email}
            onChange={handleOnChange}
          />
          </div>
          <div className="formBirth">
          <p>Data de nascimento</p>
          <input
            type="date"
            className="InputBirth"
            name="nascimento"
            value={nascimento}
            onChange={handleOnChange}
          />
          </div>
          </div>
        </form>
        <button
          type="button"
          className="nextButtonId"
          onClick={handleClick}
        >
          Próximo passo
        </button>
      </div>
    </div>
  );
}

export default IdUser;
