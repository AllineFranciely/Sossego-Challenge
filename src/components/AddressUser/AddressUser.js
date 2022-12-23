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
    numero: 0,
  });
  const [bairroAddressState, setBairroAddressState] = useState ({
    bairro: '',
  });
  const [cidadeAddressState, setCidadeAddressState] = useState ({
    cidade: '',
  });
  const [refAddressState, setRefAddressState] = useState ({
    referencia: '',
  });

  function handleClick() {
    localStorage.setItem('cepAddressState', JSON.stringify(cepAddressState));
    localStorage.setItem('ruaAddressState', JSON.stringify(ruaAddressState));
    localStorage.setItem('numAddressState', JSON.stringify(numAddressState));
    localStorage.setItem('bairroAddressState', JSON.stringify(bairroAddressState));
    localStorage.setItem('cidadeAddressState', JSON.stringify(cidadeAddressState));
    localStorage.setItem('refAddressState', JSON.stringify(refAddressState));
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
            onChange={(event) => setCepAddressState(event.target.value)}
          />
          </div>
          <div className="formRua">
          <p>Rua</p>
          <input
            type="rua"
            className="InputRua"
            name="rua"
            value={ruaAddressState.rua}
            onChange={(event) => setRuaAddressState(event.target.value)}
          />
          </div>
          </div>
          <div className="NumBairroCidade">
          <div className="formNumero">
          <p>Número</p>
          <input
            type="number"
            className="InputNumero"
            name="numero"
            value={numAddressState.numero}
            onChange={(event) => setNumAddressState(event.target.value)}
          />
          </div>
          <div className="formBairro">
          <p>Bairro</p>
          <input
            type="text"
            className="InputBairro"
            name="bairro"
            value={bairroAddressState.bairro}
            onChange={(event) => setBairroAddressState(event.target.value)}
          />
          </div>
          <div className="formCidade">
          <p>Cidade</p>
          <input
            type="text"
            className="InputCidade"
            name="cidade"
            value={cidadeAddressState.cidade}
            onChange={(event) => setCidadeAddressState(event.target.value)}
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
            onChange={(event) => setRefAddressState(event.target.value)}
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
