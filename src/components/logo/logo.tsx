import React, { memo } from 'react';
import LogoIcon from '../../assets/images/logo-icon.svg';
import { useDispatch } from 'react-redux';
import { onWelcomeSwitchAction } from '../../actions';

const Logo = () => {
  const dispatch = useDispatch();

  const logoClickHandler = (event) => {
    event.preventDefault();
    dispatch(onWelcomeSwitchAction(true));
  };

  return (
    <a className="logo" href="#no_scroll" aria-label="Логотип Awesome To-Do." onClick={logoClickHandler}>
      <LogoIcon className="logo__icon" width="92" height="65" />
    </a>
  );
};

export default memo(Logo);
