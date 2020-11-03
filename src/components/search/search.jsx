import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onSearchSwitchAction, onSearchChangeAction, onSearchingAction, onSearchCloseAction, onMenuSwitchAction} from '../../actions/index.js';
import SearchIcon from '../../assets/images/search-icon.svg';

const Search = (props) => {
  const {searchDefault, searchData, onSearchSwitch, onSearchChange, onSearching, isMenuOpen, onMenuSwitch} = props;

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

  const onSearchClose = (evt) => {
    const formElement = document.querySelector(`.search`);

    if (!formElement.contains(evt.target)) {
      props.onSearchClose();
    }
  };

  const onSearchButtonClick = (evt) => {
    evt.preventDefault();

    onSearchSwitch();
    onSearchChange(``);

    if (isMenuOpen) {
      onMenuSwitch();
    }
  };

  useEffect(() => {
    document.addEventListener(`click`, onSearchClose);
  }, []);

  let searchClassName = searchDefault ? `search` : `search search--active`;
  let searchButtonClassName = searchDefault ? `button` : `button button--active`;

  return (
    <form className={searchClassName} onSubmit={onSearchFormSubmit} autoComplete="off">
      <label className="search__label" htmlFor="search-field">
        <button className={searchButtonClassName} type="button" onClick={onSearchButtonClick}>
          <SearchIcon className="button__icon" width="16" height="16" />
        </button>
        {searchDefault ? null : <input className="search__field" type="search" name="search" id="search-field" value={searchData} autoFocus={true} onChange={onInputChange} onKeyDown={onEscKeyDownPress} placeholder="Поиск по задачам" />}
      </label>
    </form>
  );
};

Search.propTypes = {
  searchDefault: PropTypes.bool.isRequired,
  searchData: PropTypes.string.isRequired,
  onSearchSwitch: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearching: PropTypes.func.isRequired,
  onSearchClose: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  onMenuSwitch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    searchDefault: state.searchDefault,
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
