import React from 'react';
import Navigation from '../navigation';
import Search from '../search';
import Switch from '../switch';
import Logo from '../logo';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { selectTheme, themeSwitch } from '../../features/theme/themeSlice';
import { StyledContainer, StyledHeader } from './styled';
import Icons from '../icons';

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
          {theme === 'light' ? <Icons.SunIcon /> : <Icons.MoonIcon />}
        </Switch>
        <Logo />
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
