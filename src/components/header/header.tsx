import React from 'react';
import Navigation from '../navigation';
import Search from '../search';
import Switch from '../switch';
import Logo from '../logo';
import MoonIcon from '../../assets/images/moon-icon.svg';
import SunIcon from '../../assets/images/sun-icon.svg';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { selectTheme, themeSwitch } from '../../features/theme/themeSlice';
import { StyledContainer, StyledHeader } from './styled';

const Header = () => {
  const dispatch = useDispatchTyped();
  const theme = useSelectorTyped(selectTheme);
  const switchClickHandler = () => dispatch(themeSwitch());

  return (
    <StyledHeader>
      <StyledContainer>
        <Navigation />
        <Search />
        <Switch active={theme === 'light'} label={'Переключить язык.'} onClick={switchClickHandler}>
          {theme === 'light' ? <SunIcon /> : <MoonIcon />}
        </Switch>
        <Logo />
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
