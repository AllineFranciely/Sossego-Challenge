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

  const [errors, setErrors] = useState({
    errorCEP: '',
    errorRua: '',
    errorNum: '',
    errorBairro: '',
    errorCidade: '',
    errorRef: '',
  });

  function handleOnChange({ target }) {
    const { name, value } = target;
    if (name === 'cep') {
      setCepAddressState(({
        cep: value,
      }));
      if (!cepAddressState.cep || cepAddressState.cep.length < 9) {
        setErrors(({
          errorCEP: 'O CEP deve ter no mínimo 9 caracteres e formato 00000-000',
        }));
      }
      if (cepAddressState.cep && cepAddressState.cep.length >= 8) {
        setErrors(({
          errorCEP: '',
        }));
      }
    }
    if (name === 'rua') {
      setRuaAddressState(({
        rua: value,
      }));
      if (!ruaAddressState.rua) {
        setErrors(({
          errorRua: 'Preencha com o nome da rua',
        }));
      }
      if (ruaAddressState.rua && ruaAddressState.rua.length >= 2) {
        setErrors(({
          errorRua: '',
        }));
      }
    }
    if (name === 'numero') {
      setNumAddressState(({
        numero: value,
      }));
      if (!numAddressState.numero || numAddressState.numero.length < 2) {
        setErrors(({
          errorNum: 'Informe o número da casa',
        }));
      }
      if (numAddressState.numero && numAddressState.numero.length >= 1) {
        setErrors(({
          errorNum: '',
        }));
      }
    }
    if (name === 'bairro') {
      setBairroAddressState(({
        bairro: value,
      }));
      if (!bairroAddressState.bairro || bairroAddressState.bairro.length < 3) {
        setErrors(({
          errorBairro: 'Preencha com o nome do bairro',
        }));
      }
      if (bairroAddressState.bairro && bairroAddressState.bairro.length >= 2) {
        setErrors(({
          errorBairro: '',
        }));
      }
    }
    if (name === 'cidade') {
      setCidadeAddressState(({
        cidade: value,
      }));
      if (!cidadeAddressState.cidade || cidadeAddressState.cidade.length < 3) {
        setErrors(({
          errorCidade: 'Preencha com o nome da cidade',
        }));
      }
      if (cidadeAddressState.cidade && cidadeAddressState.cidade.length >= 2) {
        setErrors(({
          errorCidade: '',
        }));
      }
    }
    if (name === 'referencia') {
      setRefAddressState(({
        referencia: value,
      }));
      if (!refAddressState.referencia || refAddressState.referencia.length < 3) {
        setErrors(({
          errorRef: 'Preencha com alguma referência',
        }));
      }
      if (refAddressState.referencia && refAddressState.referencia.length >= 2) {
        setErrors(({
          errorRef: '',
        }));
      }
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
              {errors.errorCEP && <p>{errors.errorCEP}</p>}
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
              {errors.errorRua && <p>{errors.errorRua}</p>}
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
              {errors.errorNum && <p>{errors.errorNum}</p>}
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
              {errors.errorBairro && <p>{errors.errorBairro}</p>}
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
              {errors.errorCidade && <p>{errors.errorCidade}</p>}
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
            {errors.errorRef && <p>{errors.errorRef}</p>}
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
