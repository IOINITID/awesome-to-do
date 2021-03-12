/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import { onThemeSwitchAction } from '../../actions/index';
import MoonIcon from '../../assets/images/moon-icon.svg';
import SunIcon from '../../assets/images/sun-icon.svg';

interface ISwitch {
  theme: string;
  onThemeSwitch: () => void;
}

const Switch = (props: ISwitch) => {
  const { theme, onThemeSwitch } = props;

  return (
    <div className="switch" onClick={onThemeSwitch}>
      <button className="button switch__button" aria-label="Переключить тему.">
        {theme === `dark` ? (
          <MoonIcon className="button__icon button__icon--moon" width="16" height="16" />
        ) : (
          <SunIcon className="button__icon button__icon--sun" width="16" height="16" />
        )}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onThemeSwitch: () => dispatch(onThemeSwitchAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Switch);
