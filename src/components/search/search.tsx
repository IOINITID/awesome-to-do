import React, { RefObject, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import SearchIcon from '../../assets/images/search-icon.svg';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { selectSearch, searchSwitch, searchClose } from '../../features/search/searchSlice';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { menuSwitch, selectMenu } from '../../features/menu/menuSlice';
import { welcomeSwitch } from '../../features/welcome/welcomeSlice';
import { onSearching, selectSearchData, onSearchChange } from '../../features/search/searchSlice';

interface ISearch {
  language: string;
}

const Search = (props: ISearch) => {
  const { language } = props;

  const { t } = useTranslation();

  const dispatch = useDispatchTyped();
  const isSearchOpen = useSelectorTyped(selectSearch);
  const isMenuOpen = useSelectorTyped(selectMenu);
  const searchData = useSelectorTyped(selectSearchData);

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

  const searchClassName: string = isSearchOpen ? 'search search--active' : 'search';
  const searchButtonClassName: string = isSearchOpen ? 'button button--active' : 'button';

  return (
    <form className={searchClassName} ref={searchRef} onSubmit={onSearchFormSubmit} autoComplete="off">
      <label className="search__label" htmlFor="search-field">
        <button
          className={searchButtonClassName}
          type="button"
          aria-label="Открыть поиск."
          onClick={onSearchButtonClick}
        >
          <SearchIcon className="button__icon" width="16" height="16" />
        </button>
        {isSearchOpen && (
          <input
            className="search__field"
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
      </label>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

export default connect(mapStateToProps, null)(Search);
