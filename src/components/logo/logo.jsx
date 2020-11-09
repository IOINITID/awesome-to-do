import React from 'react';
import LogoIcon from '../../assets/images/logo-icon.svg';

const Logo = () => {
  return (
    <a className="logo" href="#" aria-label="Логотип Awesome To-Do.">
      <LogoIcon className="logo__icon" width="92" height="65" />
    </a>
  );
};

export default Logo;
