import React, { FormEvent, memo } from 'react';
import { useDispatchTyped } from '../../hooks';
import { welcomeSwitch } from '../../features/welcome/welcomeSlice';
import { StyledLogoLink } from './styled';
import Icons from '../icons';

const Logo = () => {
  const dispatch = useDispatchTyped();

  const logoClickHandler = (event: FormEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    dispatch(welcomeSwitch(true));
  };

  return (
    <StyledLogoLink href="#no_scroll" aria-label="Логотип Awesome To-Do." onClick={logoClickHandler}>
      <Icons.LogoIcon />
    </StyledLogoLink>
  );
};

export default memo(Logo);
