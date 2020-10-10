import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation/navigation.jsx';
import Search from '../search/search.jsx';
import Switch from '../switch/switch.jsx';
import Logo from '../logo/logo.jsx';

const Header = (props) => {

  const {onSearchChange, onModalSwitch, onSearching} = props;

  return (
    <header className="header">
      <div className="container container--flex">
        <Navigation onModalSwitch={onModalSwitch}></Navigation>
        <Search onSearching={onSearching} onSearchChange={onSearchChange}></Search>
        <Switch></Switch>
        <Logo></Logo>
      </div>
    </header>
  );
};

Header.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  onModalSwitch: PropTypes.func.isRequired,
  onSearching: PropTypes.func.isRequired
};

export default Header;
