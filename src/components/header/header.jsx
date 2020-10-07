import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation/navigation.jsx';
import Search from '../search/search.jsx';
import Switch from '../switch/switch.jsx';
import Logo from '../logo/logo.jsx';

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    const {onSearchChange, onThemeSwitch, onMenuSwitch, onModalSwitch, onSearching} = this.props;

    return (
      <header className="header">
        <div className="container container--flex">
          <Navigation onMenuSwitch={onMenuSwitch} onModalSwitch={onModalSwitch}></Navigation>
          <Search onSearching={onSearching} onSearchChange={onSearchChange}></Search>
          <Switch onThemeSwitch={onThemeSwitch}></Switch>
          <Logo></Logo>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  onThemeSwitch: PropTypes.func.isRequired,
  onMenuSwitch: PropTypes.func.isRequired,
  onModalSwitch: PropTypes.func.isRequired
};
