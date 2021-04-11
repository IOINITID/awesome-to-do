import React, { memo, RefObject, useEffect, useRef } from 'react';
import SearchIcon from '../../assets/images/search-icon.svg';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { selectSearch, searchSwitch, searchClose } from '../../features/search/searchSlice';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { menuSwitch, selectMenu } from '../../features/menu/menuSlice';
import { welcomeSwitch } from '../../features/welcome/welcomeSlice';
import { onSearching, selectSearchData, onSearchChange } from '../../features/search/searchSlice';
import { selectLanguage } from '../../features/language/languageSlice';
import Button from '../button';
import { StyledSearchForm, StyledSearchInput, StyledSearchLabel } from './styled';

const Search = () => {
  const { t } = useTranslation();

  const dispatch = useDispatchTyped();
  const isSearchOpen = useSelectorTyped(selectSearch);
  const isMenuOpen = useSelectorTyped(selectMenu);
  const searchData = useSelectorTyped(selectSearchData);
  const language = useSelectorTyped(selectLanguage);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const searchRef: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const searchDataValue = evt.target.value;

    if (searchDataValue.length) {
      dispatch(onSearching(true));
    } else {
      dispatch(onSearching(false));
    }

    dispatch(welcomeSwitch(false));
    dispatch(onSearchChange(searchDataValue));
  };

  const onSearchFormSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
  };

  const onEscKeyDownPress = (evt: React.KeyboardEvent<HTMLInputElement>): void => {
    if (evt.key === 'Escape') {
      dispatch(searchSwitch());
    }
  };

  const onSearchFieldClose = (evt): void => {
    if (!searchRef.current.contains(evt.target)) {
      dispatch(onSearchChange(''));
      dispatch(onSearching(false));
      dispatch(searchClose());
    }
  };

  const onSearchButtonClick = (evt: React.MouseEvent<HTMLButtonElement>): void => {
    evt.preventDefault();

    dispatch(onSearchChange(''));
    dispatch(searchSwitch());

    if (isMenuOpen) {
      dispatch(menuSwitch());
    }
  };

  useEffect(() => {
    if (isSearchOpen) {
      document.addEventListener('click', onSearchFieldClose);
    }

    return () => document.removeEventListener('click', onSearchFieldClose);
  }, [isSearchOpen]);

  return (
    <StyledSearchForm active={isSearchOpen} ref={searchRef} onSubmit={onSearchFormSubmit} autoComplete="off">
      <StyledSearchLabel htmlFor="search-field">
        <Button active={isSearchOpen} onClick={onSearchButtonClick} aria-label="Открыть поиск.">
          <SearchIcon />
        </Button>
        {isSearchOpen && (
          <StyledSearchInput
            type="search"
            name="search"
            id="search-field"
            value={searchData}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={true}
            onChange={onInputChange}
            onKeyDown={onEscKeyDownPress}
            placeholder={t('Поиск по задачам')}
          />
        )}
      </StyledSearchLabel>
    </StyledSearchForm>
  );
};

export default memo(Search);
