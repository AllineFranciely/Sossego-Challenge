import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirm, setSenhaConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [nascimento, setNascimento] = useState('');

  const valueContext = {
    nome,
    setNome,
    senha,
    setSenha,
    senhaConfirm,
    setSenhaConfirm,
    email, 
    setEmail,
    nascimento,
    setNascimento,
  };

  return (
    <Context.Provider value={ valueContext }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;