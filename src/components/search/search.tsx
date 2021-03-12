import React, { RefObject, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import {
  onSearchSwitchAction,
  onSearchChangeAction,
  onSearchingAction,
  onSearchCloseAction,
  onMenuSwitchAction,
  onWelcomeSwitchAction,
} from '../../actions/index';
import SearchIcon from '../../assets/images/search-icon.svg';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

interface ISearch {
  isSearchOpen: boolean;
  isMenuOpen: boolean;
  searchData: string;
  onSearchSwitch: () => void;
  onSearchChange: (firstArg?: string) => void;
  onSearchClose: () => void;
  onSearching: (firstArg: boolean) => void;
  onMenuSwitch: () => void;
  language: string;
  onWellcomeSwitch: () => void;
}

const Search = (props: ISearch) => {
  const {
    isSearchOpen,
    isMenuOpen,
    searchData,
    onSearchSwitch,
    onSearchChange,
    onSearchClose,
    onSearching,
    onMenuSwitch,
    language,
    onWellcomeSwitch,
  } = props;

  const { t } = useTranslation();

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

    onWellcomeSwitch();

    onSearchChange(searchDataValue);
  };

  const onSearchFormSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
  };

  const onEscKeyDownPress = (evt: React.KeyboardEvent<HTMLInputElement>): void => {
    if (evt.key === `Escape`) {
      onSearchSwitch();
    }
  };

  const onSearchFieldClose = (evt): void => {
    if (!searchRef.current.contains(evt.target)) {
      onSearchClose();
      onSearchChange();
      onSearching(false);
    }
  };

  const onSearchButtonClick = (evt: React.MouseEvent<HTMLButtonElement>): void => {
    evt.preventDefault();

    onSearchSwitch();
    onSearchChange();

    if (isMenuOpen) {
      onMenuSwitch();
    }
  };

  useEffect(() => {
    if (isSearchOpen) {
      document.addEventListener(`click`, onSearchFieldClose);
    }

    return () => document.removeEventListener(`click`, onSearchFieldClose);
  }, [isSearchOpen]);

  const searchClassName: string = isSearchOpen ? `search search--active` : `search`;
  const searchButtonClassName: string = isSearchOpen ? `button button--active` : `button`;

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
    isSearchOpen: state.isSearchOpen,
    searchData: state.searchData,
    isMenuOpen: state.isMenuOpen,
    language: state.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchSwitch: () => dispatch(onSearchSwitchAction()),
    onSearchChange: (searchData) => dispatch(onSearchChangeAction(searchData)),
    onSearching: (searching) => dispatch(onSearchingAction(searching)),
    onSearchClose: () => dispatch(onSearchCloseAction()),
    onMenuSwitch: () => dispatch(onMenuSwitchAction()),
    onWellcomeSwitch: () => dispatch(onWelcomeSwitchAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
