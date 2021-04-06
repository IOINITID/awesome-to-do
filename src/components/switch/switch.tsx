/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onThemeSwitchAction } from '../../actions/index';
import MoonIcon from '../../assets/images/moon-icon.svg';
import SunIcon from '../../assets/images/sun-icon.svg';

const Switch = () => {
  const dispatch = useDispatch();
  const theme = useSelector<any>((state) => state.theme);
  const switchClickHandler = () => dispatch(onThemeSwitchAction());

  return (
    <div className="switch" onClick={switchClickHandler}>
      <button className="button switch__button" aria-label="Переключить тему.">
        {theme === 'dark' ? (
          <MoonIcon className="button__icon button__icon--moon" width="16" height="16" />
        ) : (
          <SunIcon className="button__icon button__icon--sun" width="16" height="16" />
        )}
      </button>
    </div>
  );
};

export default memo(Switch);
