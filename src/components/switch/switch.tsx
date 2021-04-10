/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { memo } from 'react';
import MoonIcon from '../../assets/images/moon-icon.svg';
import SunIcon from '../../assets/images/sun-icon.svg';
import { useSelectorTyped, useDispatchTyped } from '../../hooks';
import { selectTheme, themeSwitch } from '../../features/theme/themeSlice';
import Button from '../button';
import { StyledSwitch } from './styled';

const Switch = () => {
  const dispatch = useDispatchTyped();
  const theme = useSelectorTyped(selectTheme);
  const switchClickHandler = () => dispatch(themeSwitch());

  return (
    // <div className="switch" onClick={switchClickHandler}>
    <StyledSwitch active={theme === 'light'} onClick={switchClickHandler}>
      <Button aria-label="Переключить тему.">{theme === 'dark' ? <MoonIcon /> : <SunIcon />}</Button>
    </StyledSwitch>
    // </div>
  );
};

export default memo(Switch);
