import React from 'react';
import Losango from '../../images/losango.jpg';
import './NotFound.css';

function NotFound() {
  return (
    <div className="boddy">
      <div className="losangos">
        <img className="Polygon-1" src={Losango} alt="Losango" />
        <img className="Polygon-2" src={Losango} alt="Losango" />
        <img className="Polygon-3" src={Losango} alt="Losango" />
        <img className="Polygon-4" src={Losango} alt="Losango" />
      </div>
      <div className="message-box">
        <h1>404</h1>
        <p>Página não encontrada</p>
        <button className="button">
          Página Inicial
        </button>
      </div>
    </div>
  );
}

export default NotFound;
