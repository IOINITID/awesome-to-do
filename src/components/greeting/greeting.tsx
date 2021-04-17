import React, { memo, useEffect } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useSelectorTyped } from '../../hooks';
import { selectLanguage } from '../../features/language/languageSlice';
import { selectTheme } from '../../features/theme/themeSlice';
import { StyledGreeting, StyledGreetingDescription, StyledGreetingInfo, StyledGreetingTitle } from './styled';
import Icons from '../icons';

const Greeting = () => {
  const theme = useSelectorTyped(selectTheme);
  const language = useSelectorTyped(selectLanguage);
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <StyledGreeting>
      <StyledGreetingInfo>
        <StyledGreetingTitle>Awesome to do</StyledGreetingTitle>
        <StyledGreetingDescription>{t('title')}</StyledGreetingDescription>
      </StyledGreetingInfo>
      {theme === 'light' ? <Icons.GreetingLightIcon /> : <Icons.GreetingDarkIcon />}
    </StyledGreeting>
  );
};

export default memo(Greeting);
