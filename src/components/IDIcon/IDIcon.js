import React from 'react';
import { BiUserCircle } from "react-icons/bi";
import './IDIcon.css';

function IdIcon() {
  return (
    <div className="IdIcon">
      <BiUserCircle className="UserIcon"/>
      <p>Identificação do Usuário</p>
    </div>
  );
}

export default IdIcon;
