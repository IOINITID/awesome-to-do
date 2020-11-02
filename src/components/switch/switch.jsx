import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onThemeSwitchAction} from '../../actions/index.js';
import MoonIcon from '../../assets/images/moon-icon.svg';
import SunIcon from '../../assets/images/sun-icon.svg';

const Switch = (props) => {
  const {onThemeSwitch} = props;

  return (
    <div className="switch">
      <button className="button switch__button" onClick={onThemeSwitch}>
        <MoonIcon className="button__icon button__icon--moon" width="16" height="16" />
        <SunIcon className="button__icon button__icon--sun" width="16" height="16" />
      </button>
    </div>
  );
};

Switch.propTypes = {
  onThemeSwitch: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    onThemeSwitch: () => dispatch(onThemeSwitchAction())
  };
};

export default connect(null, mapDispatchToProps)(Switch);
