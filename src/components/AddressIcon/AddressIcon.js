import React from 'react';
import { BsHouseDoor } from "react-icons/bs";
import './AddressIcon.css';

function AddressIcon() {
  return (
    <div className="AddressIcon">
      <BsHouseDoor className="HouseIcon"/>
      <p>Endereço do Usuário</p>
    </div>
  );
}

export default AddressIcon;
