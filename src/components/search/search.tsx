import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onSearchSwitchAction, onSearchChangeAction, onSearchingAction, onSearchCloseAction, onMenuSwitchAction} from '../../actions/index';
import SearchIcon from '../../assets/images/search-icon.svg';

const Search = (props) => {
  const {isSearchOpen, isMenuOpen, searchData, onSearchSwitch, onSearchChange, onSearchClose, onSearching, onMenuSwitch} = props;

  const searchRef = useRef(null);

  const onInputChange = (evt) => {
    const searchDataValue = evt.target.value;

    if (searchDataValue.length) {
      onSearching(true);
    } else {
      onSearching(false);
    }

    onSearchChange(searchDataValue);
  };

  const onSearchFormSubmit = (evt) => {
    evt.preventDefault();
  };

  const onEscKeyDownPress = (evt) => {
    if (evt.key === `Escape`) {
      onSearchSwitch();
    }
  };

  const onSearchFieldClose = (evt) => {
    if (!searchRef.current.contains(evt.target)) {
      onSearchClose();
      onSearchChange();
      onSearching(false);
    }
  };

  const onSearchButtonClick = (evt) => {
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

  let searchClassName = isSearchOpen ? `search search--active` : `search`;
  let searchButtonClassName = isSearchOpen ? `button button--active` : `button`;

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

Search.propTypes = {
  isSearchOpen: PropTypes.bool.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  searchData: PropTypes.string.isRequired,
  onSearchSwitch: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchClose: PropTypes.func.isRequired,
  onSearching: PropTypes.func.isRequired,
  onMenuSwitch: PropTypes.func.isRequired
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
