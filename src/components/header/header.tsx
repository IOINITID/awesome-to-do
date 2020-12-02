import React from 'react';
import Navigation from '../navigation/navigation';
import Search from '../search/search';
import Switch from '../switch/switch';
import Logo from '../logo/logo';

const Header = () => {
  return (
    <header className="header">
      <div className="container container--flex">
        <Navigation />
        <Search />
        <Switch />
        <Logo />
      </div>
    </header>
  );
};

export default Header;
