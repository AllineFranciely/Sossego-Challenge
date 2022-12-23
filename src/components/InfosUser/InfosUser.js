import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './InfosUser.css';

function InfosUser() {

  const navigate = useNavigate();
  const [userName, setUserName] = useState('default');
  const [userEmail, setUserEmail] = useState('emaildefault@email.com');
  const [ruaAddressState, setRuaAddressState] = useState('ruaDefault');
  const [numAddressState, setNumAddressState] = useState('0');
  const [cepAddressState, setCepAddressState] = useState('00000-000');
  const nameUser = localStorage.getItem('userName');
  const emailUser = localStorage.getItem('userEmail');
  const ruaUser = localStorage.getItem('ruaAddressState');
  const numUser = localStorage.getItem('numAddressState');
  const cepUser = localStorage.getItem('cepAddressState');

  useEffect(() => {
    if (nameUser) {
      const { nome } = JSON.parse(nameUser);
      setUserName(nome);
    }
    if (emailUser) {
      const { email } = JSON.parse(emailUser);
      setUserEmail(email);
    }
    if (ruaAddressState) {
      const { rua } = JSON.parse(ruaUser);
      setRuaAddressState(rua);
    }
    if (numAddressState) {
      const { numero } = JSON.parse(numUser);
      setNumAddressState(numero);
    }
    if (cepAddressState) {
      const { cep } = JSON.parse(cepUser);
      setCepAddressState(cep);
    }
  }, []);

  return (
    <div className="pageUserInfos">
      <div className="boxUserInfos">
        <h1 className="titleInfos">Usuário criado!</h1>
        <div>
          <div className="boxInfos">
            <p className="campo">Nome</p>
            <p className="info">{userName}</p>
          </div>
          <div className="boxInfos">
            <p className="campo">Email</p>
            <p className="info">{userEmail}</p>
          </div>
          <div className="ruaNum">
          <div className="boxInfos">
            <p className="campo">Rua</p>
            <p className="info">{ruaAddressState}</p>
          </div>
          <div className="boxInfos">
            <p className="campoNum">Número</p>
            <p className="infoNum">{numAddressState}</p>
          </div>
          </div>
          <div className="boxInfos">
            <p className="campo">CEP</p>
            <p className="info">{cepAddressState}</p>
          </div>
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
