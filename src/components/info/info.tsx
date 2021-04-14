import React, { Fragment, memo, useEffect } from 'react';
import NoTaskDarkIcon from '../../assets/images/no-task-dark-icon.svg';
import NoTaskLightIcon from '../../assets/images/no-task-light-icon.svg';
import NotFoundDarkIcon from '../../assets/images/not-found-dark-icon.svg';
import NotFoundLightIcon from '../../assets/images/not-found-light-icon.svg';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useSelectorTyped } from '../../hooks';
import { selectSearching } from '../../features/search/searchSlice';
import { selectTheme } from '../../features/theme/themeSlice';
import { selectLanguage } from '../../features/language/languageSlice';
import { selectFilter } from '../../features/filter/filterSlice';
import { StyledInfo, StyledInfoDescription, StyledTitle } from './styled';

interface IInfoData {
  title: string;
  description: string;
}

const Info = () => {
  const { t } = useTranslation();

  const searching = useSelectorTyped(selectSearching);
  const theme = useSelectorTyped(selectTheme);
  const language = useSelectorTyped(selectLanguage);
  const filterType = useSelectorTyped(selectFilter);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  let infoData: IInfoData;

  switch (filterType) {
    case 'all':
      infoData = { title: t('menuAll'), description: 'noTasks' };
      break;
    case 'undone':
      infoData = { title: t('menuCurrent'), description: t('noActiveTasks') };
      break;
    case 'done':
      infoData = { title: t('menuDone'), description: t('noDoneTasks') };
      break;
    case 'fixed':
      infoData = { title: t('menuFixed'), description: t('noFixedTasks') };
      break;
    default:
      infoData = { title: t('menuAll'), description: 'noTasks' };
      break;
  }

  return (
    <StyledInfo>
      <StyledTitle>{searching ? t('searchBtTasks') : infoData.title}</StyledTitle>
      {searching ? (
        <Fragment>
          <StyledInfoDescription>{t('noMatchFound')}</StyledInfoDescription>
          {theme === 'dark' ? (
            <NotFoundDarkIcon className="info__icon" />
          ) : (
            <NotFoundLightIcon className="info__icon" />
          )}
        </Fragment>
      ) : (
        <Fragment>
          <StyledInfoDescription>{infoData.description}</StyledInfoDescription>
          <StyledInfoDescription>{t('addTaskInfo')}</StyledInfoDescription>
          {theme === 'dark' ? <NoTaskDarkIcon className="info__icon" /> : <NoTaskLightIcon className="info__icon" />}
        </Fragment>
      )}
    </StyledInfo>
  );
};

export default memo(Info);
