import React from 'react';
import { BiUser } from "react-icons/bi";
import './IDIcon.css';

function IdIcon() {
  return (
    <div className="IdIcon">
      <BiUser className="UserIcon"/>
      <p><b>Identificação do usuário</b></p>
    </div>
  );
}

export default IdIcon;
