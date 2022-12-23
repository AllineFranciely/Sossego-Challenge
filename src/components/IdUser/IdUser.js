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
  const [userSenha, setUserSenha] = useState({
    senha: '',
  });
  const [userSenhaConfirm, setUserSenhaConfirm] = useState({
    senhaConfirm: '',
  });
  const [userNascimento, setUserNascimento] = useState({
    nascimento: '',
  });
  const [errors, setErrors] = useState({
    errorName: '',
    errorEmail: '',
    errorSenha: '',
    errorSenhaConfirm: '',
    errorNascimento: '',
  });

  function handleOnChange({ target }) {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;
    const { type, value, name } = target;
    if (type === 'text') {
      setUserName(({
        nome: value,
      }));
      if (!userName.nome || userName.nome.length < 3) {
        setErrors(({
          errorName: 'O nome deve ter no mínimo 3 caracteres',
        }));
      }
      if (userName.nome && userName.nome.length >= 2) {
        setErrors(({
          errorName: '',
        }));
      }
    } else if (type === 'email') {
      setUserEmail(({
        email: value,
      }));
      if (!userEmail.email || userEmail.email !== emailRegex) {
        setErrors(({
          errorEmail: 'Informe um email válido',
        }));
      }
      if (userEmail.email && userEmail.email === emailRegex) {
        setErrors(({
          errorEmail: '',
        }));
      }
    } else if (type === 'password') {
      setUserSenha(({
        senha: value,
      }));
      if (!userSenha.senha || userSenha.senha.length < 5) {
        setErrors(({
          errorSenha: 'A senha deve ter no mínimo 5 caracteres'
        }));
      }
      if (userSenha.senha && userSenha.senha.length >= 4) {
        setErrors(({
          errorSenha: '',
        }));
      }
    } else if (name === 'senhaConfirm') {
      setUserSenhaConfirm(({
        senhaConfirm: value,
      }));
      if (!userSenhaConfirm.senhaConfirm || userSenhaConfirm.senhaConfirm !== userSenha.senha) {
        setErrors(({
          errorSenhaConfirm: 'As senhas devem ser iguais',
        }));
      }
      if (userSenhaConfirm.senhaConfirm && userSenhaConfirm.senhaConfirm === userSenha.senha) {
        setErrors(({
          errorSenhaConfirm: '',
        }));
      }
    } else if (type === 'date') {
      setUserNascimento(({
        nascimento: value,
      }));
      if (!userNascimento) {
        setErrors(({
          errorNascimento: 'Preencha com a data de nascimento'
        }));
      }
      if (userNascimento) {
        setErrors(({
          errorNascimento: '',
        }));
      }
    }
  }

  function handleClick() {
    localStorage.setItem('userName', JSON.stringify(userName));
    localStorage.setItem('userEmail', JSON.stringify(userEmail));
    localStorage.setItem('userNascimento', JSON.stringify(userNascimento));
    // console.log(userName);
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
            {errors.errorName && <p>{errors.errorName}</p>}
          </div>
          <div className="senha">
            <div className="formSenha">
              <p>Senha</p>
              <input
                type="password"
                className="InputPassword"
                name="senha"
                value={userSenha.senha}
                onChange={handleOnChange}
              />
              {errors.errorSenha && <p>{errors.errorSenha}</p>}
            </div>
            <div className="formSenha">
              <p>Confirmar Senha</p>
              <input
                type="password"
                className="InputPassword"
                name="senhaConfirm"
                value={userSenhaConfirm.senhaConfirm}
                onChange={handleOnChange}
              />
              {errors.errorSenhaConfirm && <p>{errors.errorSenhaConfirm}</p>}
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
              {errors.errorEmail && <p>{errors.errorEmail}</p>}
            </div>
            <div className="formBirth">
              <p>Data de nascimento</p>
              <input
                type="date"
                className="InputBirth"
                name="nascimento"
                value={userNascimento.nascimento}
                onChange={handleOnChange}
              />
              {errors.errorNascimento && <p>{errors.errorNascimento}</p>}
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
