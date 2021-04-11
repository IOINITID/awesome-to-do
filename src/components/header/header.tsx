import React from 'react';
import Navigation from '../navigation/navigation';
import Search from '../search/search';
import Switch from '../switch';
import Logo from '../logo/logo';
import MoonIcon from '../../assets/images/moon-icon.svg';
import SunIcon from '../../assets/images/sun-icon.svg';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { selectTheme, themeSwitch } from '../../features/theme/themeSlice';

const Header = () => {
  const dispatch = useDispatchTyped();
  const theme = useSelectorTyped(selectTheme);
  const switchClickHandler = () => dispatch(themeSwitch());

  return (
    <header className="header">
      <div className="container container--flex">
        <Navigation />
        <Search />
        <Switch active={theme === 'light'} label={'Переключить язык.'} onClick={switchClickHandler}>
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </Switch>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
