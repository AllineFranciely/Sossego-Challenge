import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigateBar from '../../components/NavigateBar/NavigateBar';
import './AddressUser.css';

function AddressUser() {

  const navigate = useNavigate();

  const [AddressState, setAddressState] = useState({
    cep: '',
    rua: '',
    numero: 0,
    bairro: '',
    cidade: '',
    referencia: '',
  });
  const { cep, rua, numero, bairro, cidade, referencia } = AddressState;

  const handleChange = ({ target }) => {
    const { name } = target;
    let { value } = target;

    setAddressState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
            value={cep}
            onChange={handleChange}
          />
          </div>
          <div className="formRua">
          <p>Rua</p>
          <input
            type="rua"
            className="InputRua"
            name="rua"
            value={rua}
            onChange={handleChange}
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
            value={numero}
            onChange={handleChange}
          />
          </div>
          <div className="formBairro">
          <p>Bairro</p>
          <input
            type="text"
            className="InputBairro"
            name="bairro"
            value={bairro}
            onChange={handleChange}
          />
          </div>
          <div className="formCidade">
          <p>Cidade</p>
          <input
            type="text"
            className="InputCidade"
            name="cidade"
            value={cidade}
            onChange={handleChange}
          />
          </div>
          </div>
          <div className="formReferencia">
          <p>Ponto de Referência</p>
          <input
            type="text"
            className="InputReferencia"
            name="referencia"
            value={referencia}
            onChange={handleChange}
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
          onClick={() => navigate('/user-about')}
        >
          Próximo passo
        </button>
      </div>
    </div>
  );
}

export default AddressUser;
