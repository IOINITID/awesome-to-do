import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onSearchSwitchAction, onSearchChangeAction, onSearchingAction, onSearchCloseAction, onMenuSwitchAction} from '../../actions/index.js';

const Search = (props) => {
  const {searchDefault, searchData, onSearchSwitch, onSearchChange, onSearching, menuDefault, onMenuSwitch} = props;

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

    if (!menuDefault) {
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
          <svg className="button__icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.1468 9.4944C13.1058 6.78231 12.4506 3.02685 9.68429 1.10668C6.91795 -0.813486 3.08739 -0.171595 1.12882 2.54096C-0.829756 5.25305 -0.175027 9.00805 2.59178 10.9282C4.56626 12.2987 7.17676 12.4043 9.25935 11.1985L13.7844 15.6082C14.273 16.1124 15.0859 16.1326 15.6003 15.6536C16.1146 15.1751 16.1352 14.3781 15.6471 13.8739C15.6316 13.8578 15.6166 13.8431 15.6003 13.828L11.1468 9.4944ZM6.13406 9.90551C3.94804 9.90597 2.17573 8.16978 2.17432 6.02663C2.17386 3.88347 3.94476 2.14591 6.13125 2.145C8.31446 2.14408 10.0858 3.87751 10.09 6.01791C10.0938 8.16153 8.32382 9.90184 6.13686 9.90551C6.13593 9.90551 6.13546 9.90551 6.13406 9.90551Z"
              fill="white" />
          </svg>
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
  menuDefault: PropTypes.bool.isRequired,
  onMenuSwitch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    searchDefault: state.searchDefault,
    searchData: state.searchData,
    menuDefault: state.menuDefault
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
