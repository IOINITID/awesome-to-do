import React, { memo, useEffect } from 'react';
import GreetingDarkIcon from '../../assets/images/greeting-dark-icon.svg';
import GreetingLightIcon from '../../assets/images/greeting-light-icon.svg';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { selectLanguage } from '../../features/language/languageSlice';
import { useSelectorTyped } from '../../hooks';
import { selectTheme } from '../../features/theme/themeSlice';
import { StyledGreeting, StyledGreetingDescription, StyledGreetingInfo, StyledGreetingTitle } from './styled';

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
        <StyledGreetingDescription>
          {t('Ваш личный помощник')}
          <br /> {t('в организации списка задач')}
        </StyledGreetingDescription>
      </StyledGreetingInfo>
      {theme === 'light' ? <GreetingLightIcon /> : <GreetingDarkIcon />}
    </StyledGreeting>
  );
};

export default memo(Greeting);
