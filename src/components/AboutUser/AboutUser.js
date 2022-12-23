import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigateBar from '../../components/NavigateBar/NavigateBar';
import './AboutUser.css';

function AboutUser() {

  const navigate = useNavigate();

  const [AboutState, setAboutState] = useState({
    sobre: '',
  });
  const { sobre } = AboutState;

  const handleChange = ({ target }) => {
    const { name } = target;
    let { value } = target;

    setAboutState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
            value={sobre}
            onChange={handleChange}
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
          onClick={() => navigate('/user-infos')}
        >
          Próximo passo
        </button>
      </div>
    </div>
  );
}

export default AboutUser;
