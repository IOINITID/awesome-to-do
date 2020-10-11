import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation/navigation.jsx';
import Search from '../search/search.jsx';
import Switch from '../switch/switch.jsx';
import Logo from '../logo/logo.jsx';

const Header = (props) => {
  const {onModalSwitch} = props;

  return (
    <header className="header">
      <div className="container container--flex">
        <Navigation onModalSwitch={onModalSwitch} />
        <Search />
        <Switch />
        <Logo />
      </div>
    </header>
  );
};

Header.propTypes = {
  onModalSwitch: PropTypes.func.isRequired
};

export default Header;
