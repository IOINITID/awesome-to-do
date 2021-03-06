import React from 'react';
import LogoIcon from '../../assets/images/logo-icon.svg';
import { connect } from 'react-redux';
import { onWelcomeSwitchAction } from '../../actions';

const Logo = ({ onWelcomeSwitch }: { onWelcomeSwitch: (isWellcome) => void }) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      className="logo"
      href="#"
      aria-label="Логотип Awesome To-Do."
      onClick={(event) => {
        event.preventDefault();
        onWelcomeSwitch(true);
      }}
    >
      <LogoIcon className="logo__icon" width="92" height="65" />
    </a>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onWelcomeSwitch: (isWellcome) => dispatch(onWelcomeSwitchAction(isWellcome)),
  };
};

export default connect(null, mapDispatchToProps)(Logo);
