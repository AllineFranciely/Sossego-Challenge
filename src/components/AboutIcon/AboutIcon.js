import React from 'react';
import { BsCardText } from "react-icons/bs";
import './AboutIcon.css';

function AboutIcon() {
  return (
    <div className="AboutIcon">
      <BsCardText className="TextIcon"/>
      <p>Identificação do Usuário</p>
    </div>
  );
}

export default AboutIcon;
