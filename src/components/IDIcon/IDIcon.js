import React from 'react';
import { BiUser } from "react-icons/bi";
import './IDIcon.css';

function IdIcon() {
  return (
    <div className="IdIcon">
      <BiUser className="UserIcon"/>
      <p>Identificação do usuário</p>
    </div>
  );
}

export default IdIcon;
