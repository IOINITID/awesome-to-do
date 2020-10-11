import React from 'react';
import Navigation from '../navigation/navigation.jsx';
import Search from '../search/search.jsx';
import Switch from '../switch/switch.jsx';
import Logo from '../logo/logo.jsx';

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
