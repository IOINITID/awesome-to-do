import React, { FormEvent, memo } from 'react';
import LogoIcon from '../../assets/images/logo-icon.svg';
import Link from '../link';
import { useDispatchTyped } from '../../hooks';
import { welcomeSwitch } from '../../features/welcome/welcomeSlice';

const Logo = () => {
  const dispatch = useDispatchTyped();

  const logoClickHandler = (event: FormEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    dispatch(welcomeSwitch(true));
  };

  return (
    <Link href="#no_scroll" aria-label="Логотип Awesome To-Do." onClick={logoClickHandler}>
      <LogoIcon />
    </Link>
  );
};

export default memo(Logo);
