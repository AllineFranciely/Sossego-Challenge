import React from 'react';
import { BsCardText } from "react-icons/bs";
import './AboutIcon.css';

function AboutIcon() {
  return (
    <div className="AboutIcon">
      <BsCardText className="TextIcon"/>
      <p><b>Sobre você</b></p>
    </div>
  );
}

export default AboutIcon;
