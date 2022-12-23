import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './InfosUser.css';

function InfosUser() {

  const navigate = useNavigate();
  const [userName, setUserName] = useState('default');
  const [userEmail, setUserEmail] = useState('emaildefault@email.com');
  const nameUser = localStorage.getItem('userName');
  const emailUser = localStorage.getItem('userEmail');

  useEffect(() => {
    if (nameUser) {
      const { nome } = JSON.parse(nameUser); // estrutura retornada sem o JSON.parse: {"email":"alline_franciely@hotmail.com"}
      setUserName(nome);
    }
    if (emailUser) {
      const { email } = JSON.parse(emailUser); // estrutura retornada sem o JSON.parse: {"email":"alline_franciely@hotmail.com"}
      setUserEmail(email);
    }
  }, []);

  return (
    <div className="pageUserInfos">
      <div className="boxUserInfos">
        <h1 className="titleInfos">Usuário criado!</h1>
        <div>
          <p>Nome</p>
          <p>{userName}</p>
          
          <p>Email</p>
          <p>{userEmail}</p>
        </div>
        <button
          type="button"
          className="novoUsuario"
          onClick={() => navigate('/user-id')}
        >
          Novo usuário
        </button>
      </div>
    </div>
  );
}

export default InfosUser;
