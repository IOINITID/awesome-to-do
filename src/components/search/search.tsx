import React, { RefObject, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { onSearchChangeAction, onSearchingAction } from '../../actions/index';
import SearchIcon from '../../assets/images/search-icon.svg';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { selectSearch, searchSwitch, searchClose } from '../../features/search/searchSlice';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { menuSwitch, selectMenu } from '../../features/menu/menuSlice';
import { welcomeSwitch } from '../../features/welcome/welcomeSlice';

interface ISearch {
  searchData: string;
  onSearchChange: (firstArg?: string) => void;
  onSearching: (firstArg: boolean) => void;
  language: string;
}

const Search = (props: ISearch) => {
  const { searchData, onSearchChange, onSearching, language } = props;

  const { t } = useTranslation();

  const dispatch = useDispatchTyped();
  const isSearchOpen = useSelectorTyped(selectSearch);
  const isMenuOpen = useSelectorTyped(selectMenu);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const searchRef: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const searchDataValue: string = evt.target.value;

    if (searchDataValue.length) {
      onSearching(true);
    } else {
      onSearching(false);
    }

    dispatch(welcomeSwitch());

    onSearchChange(searchDataValue);
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
      onSearchChange();
      onSearching(false);

      dispatch(searchClose());
    }
  };

  const onSearchButtonClick = (evt: React.MouseEvent<HTMLButtonElement>): void => {
    evt.preventDefault();

    onSearchChange();
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
    searchData: state.app.searchData,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (searchData) => dispatch(onSearchChangeAction(searchData)),
    onSearching: (searching) => dispatch(onSearchingAction(searching)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
