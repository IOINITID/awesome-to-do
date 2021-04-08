import React, { memo, useEffect } from 'react';
import GreetingDarkIcon from '../../assets/images/greeting-dark-icon.svg';
import GreetingLightIcon from '../../assets/images/greeting-light-icon.svg';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { selectLanguage } from '../../features/language/languageSlice';
import { useSelectorTyped } from '../../hooks';
import { selectTheme } from '../../features/theme/themeSlice';

const Greeting = () => {
  const theme = useSelectorTyped(selectTheme);
  const language = useSelectorTyped(selectLanguage);
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <section className="greeting">
      <div className="greeting__info">
        <h2 className="greeting__title">Awesome to do</h2>
        <p className="greeting__description">
          {t('Ваш личный помощник')}
          <br /> {t('в организации списка задач')}
        </p>
      </div>
      {theme === 'dark' ? (
        <GreetingDarkIcon className="greeting__image greeting__image--dark" width="537" height="478" />
      ) : (
        <GreetingLightIcon className="greeting__image greeting__image--light" width="537" height="478" />
      )}
    </section>
  );
};

export default memo(Greeting);
