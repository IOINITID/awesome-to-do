import React, {RefObject, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {onSearchSwitchAction, onSearchChangeAction, onSearchingAction, onSearchCloseAction, onMenuSwitchAction} from '../../actions/index';
import SearchIcon from '../../assets/images/search-icon.svg';

interface ISearch {
  isSearchOpen: boolean;
  isMenuOpen: boolean;
  searchData: string;
  onSearchSwitch: () => void;
  onSearchChange: (firstArg?: string) => void;
  onSearchClose: () => void;
  onSearching: (firstArg: boolean) => void;
  onMenuSwitch: () => void;
}

const Search = (props: ISearch) => {
  const {isSearchOpen, isMenuOpen, searchData, onSearchSwitch, onSearchChange, onSearchClose, onSearching, onMenuSwitch} = props;

  const searchRef: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const searchDataValue: string = evt.target.value;

    if (searchDataValue.length) {
      onSearching(true);
    } else {
      onSearching(false);
    }

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

  let searchClassName: string = isSearchOpen ? `search search--active` : `search`;
  let searchButtonClassName: string = isSearchOpen ? `button button--active` : `button`;

  return (
    <form className={searchClassName} ref={searchRef} onSubmit={onSearchFormSubmit} autoComplete="off">
      <label className="search__label" htmlFor="search-field">
        <button className={searchButtonClassName} type="button" aria-label="Открыть поиск." onClick={onSearchButtonClick}>
          <SearchIcon className="button__icon" width="16" height="16" />
        </button>
        {
          isSearchOpen &&
          <input
            className="search__field"
            type="search" name="search"
            id="search-field"
            value={searchData}
            autoFocus={true}
            onChange={onInputChange}
            onKeyDown={onEscKeyDownPress}
            placeholder="Поиск по задачам"
          />
        }
      </label>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    isSearchOpen: state.isSearchOpen,
    searchData: state.searchData,
    isMenuOpen: state.isMenuOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchSwitch: () => dispatch(onSearchSwitchAction()),
    onSearchChange: (searchData) => dispatch(onSearchChangeAction(searchData)),
    onSearching: (searching) => dispatch(onSearchingAction(searching)),
    onSearchClose: () => dispatch(onSearchCloseAction()),
    onMenuSwitch: () => dispatch(onMenuSwitchAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
