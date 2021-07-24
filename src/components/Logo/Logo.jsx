import React from 'react';
import logo from '../../pictures/logo.svg';
import logoText from '../../pictures/logo-text.svg';

export default function Logo() {
  return (
    <div>
      <img src={logo} alt="logo" width="70" height="66" />
      <img src={logoText} alt="Slim Mom" />
    </div>
  );
}
