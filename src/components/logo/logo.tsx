import React, { FormEvent, memo } from 'react';
import LogoIcon from '../../assets/images/logo-icon.svg';
import { useDispatchTyped } from '../../hooks';
import { welcomeSwitch } from '../../features/welcome/welcomeSlice';

const Logo = () => {
  const dispatch = useDispatchTyped();

  const logoClickHandler = (event: FormEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    dispatch(welcomeSwitch(true));
  };

  return (
    <a className="logo" href="#no_scroll" aria-label="Логотип Awesome To-Do." onClick={logoClickHandler}>
      <LogoIcon className="logo__icon" width="92" height="65" />
    </a>
  );
};

export default memo(Logo);
