import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigateBar from '../../components/NavigateBar/NavigateBar';
import './AddressUser.css';

function AddressUser() {

  const navigate = useNavigate();

  const [cepAddressState, setCepAddressState] = useState({
    cep: '',
  });
  const [ruaAddressState, setRuaAddressState] = useState({
    rua: '',
  });
  const [numAddressState, setNumAddressState] = useState({
    numero: '',
  });
  const [bairroAddressState, setBairroAddressState] = useState({
    bairro: '',
  });
  const [cidadeAddressState, setCidadeAddressState] = useState({
    cidade: '',
  });
  const [refAddressState, setRefAddressState] = useState({
    referencia: '',
  });

  function handleOnChange({ target }) {
    const { name, value } = target;
    if (name === 'cep') {
      setCepAddressState(({
        cep: value,
      }));
    }
    if (name === 'rua') {
      setRuaAddressState(({
        rua: value,
      }));
    }
    if (name === 'numero') {
      setNumAddressState(({
        numero: value,
      }));
    }
    if (name === 'bairro') {
      setBairroAddressState(({
        bairro: value,
      }));
    }
    if (name === 'cidade') {
      setCidadeAddressState(({
        cidade: value,
      }));
    }
    if (name === 'referencia') {
      setRefAddressState(({
        referencia: value,
      }));
    }
  }

  function handleClick() {
    localStorage.setItem('cepAddressState', JSON.stringify(cepAddressState));
    localStorage.setItem('ruaAddressState', JSON.stringify(ruaAddressState));
    localStorage.setItem('numAddressState', JSON.stringify(numAddressState));
    localStorage.setItem('bairroAddressState', JSON.stringify(bairroAddressState));
    localStorage.setItem('cidadeAddressState', JSON.stringify(cidadeAddressState));
    localStorage.setItem('refAddressState', JSON.stringify(refAddressState));
    console.log(numAddressState);
    navigate('/user-about')
  }

  return (
    <div className="pageUserAddress">
      <div className="boxUserAddress">
        <h1 className="titleAddress">Criação de usuário</h1>
        <NavigateBar />
        <form className="FormAddress">
          <div className="cepRua">
            <div className="formCep">
              <p>CEP</p>
              <input
                type="text"
                className="Inputcep"
                name="cep"
                value={cepAddressState.cep}
                onChange={handleOnChange}
              />
            </div>
            <div className="formRua">
              <p>Rua</p>
              <input
                type="rua"
                className="InputRua"
                name="rua"
                value={ruaAddressState.rua}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="NumBairroCidade">
            <div className="formNumero">
              <p>Número</p>
              <input
                type="text"
                className="InputNumero"
                name="numero"
                value={numAddressState.numero}
                onChange={handleOnChange}
              />
            </div>
            <div className="formBairro">
              <p>Bairro</p>
              <input
                type="text"
                className="InputBairro"
                name="bairro"
                value={bairroAddressState.bairro}
                onChange={handleOnChange}
              />
            </div>
            <div className="formCidade">
              <p>Cidade</p>
              <input
                type="text"
                className="InputCidade"
                name="cidade"
                value={cidadeAddressState.cidade}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="formReferencia">
            <p>Ponto de Referência</p>
            <input
              type="text"
              className="InputReferencia"
              name="referencia"
              value={refAddressState.referencia}
              onChange={handleOnChange}
            />
          </div>
        </form>
        <button
          type="button"
          className="previousButtonAddress"
          onClick={() => navigate('/user-id')}
        >
          Anterior
        </button>
        <button
          type="button"
          className="nextButtonAddress"
          onClick={handleClick}
        >
          Próximo passo
        </button>
      </div>
    </div>
  );
}

export default AddressUser;
