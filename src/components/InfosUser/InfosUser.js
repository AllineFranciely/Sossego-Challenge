import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './InfosUser.css';

function InfosUser() {

  const navigate = useNavigate();

  const nameUser = localStorage.getItem('nome');
  const emailUser = localStorage.getItem('email');


  return (
    <div className="pageUserInfos">
      <div className="boxUserInfos">
        <h1 className="titleInfos">Usuário criado!</h1>
        <div>
          <p>Nome {nameUser}</p>
          
          <p>Email</p>
          {emailUser}
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
