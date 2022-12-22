import React from 'react';
import { BsHouseDoor } from "react-icons/bs";
import './AddressIcon.css';

function AddressIcon() {
  return (
    <div className="AddressIcon">
      <BsHouseDoor className="HouseIcon"/>
      <p><b>Endereço do usuário</b></p>
    </div>
  );
}

export default AddressIcon;
