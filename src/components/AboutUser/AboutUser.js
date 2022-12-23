import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigateBar from '../../components/NavigateBar/NavigateBar';
import './AboutUser.css';

function AboutUser() {

  const navigate = useNavigate();

  const [AboutState, setAboutState] = useState({
    sobre: '',
  });
  
  function handleOnChange({ target }) {
    const { type, value } = target;
    if (type === 'text') {
      setAboutState(({
        sobre: value,
      }));
    }
  }

  function handleClick() {
    localStorage.setItem('AboutState', JSON.stringify(AboutState));
    navigate('/user-infos')
  }

  return (
    <div className="pageUserAbout">
      <div className="boxUserAbout">
        <h1 className="titleAbout">Criação de usuário</h1>
        <NavigateBar />
        <form className="FormAbout">
          <div className="formAbout">
          <p>Nos conte mais sobre você</p>
          <textarea
            type="text"
            className="InputAbout"
            name="sobre"
            value={AboutState.sobre}
            onChange={handleOnChange}
          />
          </div>
        </form>
        <button
          type="button"
          className="previousButtonAbout"
          onClick={() => navigate('/user-address')}
        >
          Anterior
        </button>
        <button
          type="button"
          className="nextButtonAbout"
          onClick={handleClick}
        >
          Próximo passo
        </button>
      </div>
    </div>
  );
}

export default AboutUser;
