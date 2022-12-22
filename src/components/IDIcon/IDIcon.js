import React from 'react';
import { BiUser } from "react-icons/bi";
import './IDIcon.css';

function IdIcon() {
  return (
    <div className="IdIcon">
      <BiUser className="UserIcon"/>
      <p>Identificação do Usuário</p>
    </div>
  );
}

export default IdIcon;
