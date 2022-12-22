import React from 'react';
import IdIcon from '../IDIcon/IDIcon';
import AddressIcon from '../AddressIcon/AddressIcon';
import AboutIcon from '../AboutIcon/AboutIcon';
import './NavigateBar.css';

function NavigateBar () {
  return (
    <div className="navibar">
      <IdIcon />
      <AddressIcon />
      <AboutIcon />
    </div>
  );
}

export default NavigateBar;
