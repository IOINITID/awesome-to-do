import React from 'react';
import PropTypes from 'prop-types';
import {v4 as uuid} from 'uuid';
import {connect} from 'react-redux';
import {onMenuSwitchAction, onModalSwitchAction, onSearchSwitchAction, onSearchChangeAction} from '../../actions/index.js';
import Button from '../button/button.jsx';
import Icon from '../icon/icon.jsx';

const Navigation = (props) => {
  const {onMenuSwitch, onModalSwitch, menuDefault, modalDefault, onSearchSwitch, onSearchChange} = props;

  const onAddButtonClick = (evt) => {
    const modalType = evt.target.dataset.type;

    onModalSwitch(null, modalType);
    onSearchSwitch(true);
    onSearchChange(``);

    if (!menuDefault) {
      onMenuSwitch();
    }
  };

  const onMenuButtonClick = (evt) => {
    evt.preventDefault();

    onMenuSwitch();
    onSearchChange(``);
  };

  const navigationItemsData = [
    {
      id: uuid(),
      button: {
        className: menuDefault ? `button` : `button button--active`,
        type: `button`,
        dataType: `menu`,
        events: {
          onClick: onMenuButtonClick
        }
      },
      icon: {
        className: `button`,
        name: `menu`,
        width: 19,
        height: 16
      },
    },
    {
      id: uuid(),
      button: {
        className: modalDefault ? `button` : `button button--active`,
        type: `button`,
        dataType: `add`,
        events: {
          onClick: onAddButtonClick
        }
      },
      icon: {
        className: `button`,
        name: `add`,
        width: 16,
        height: 16
      },
    }
  ];

  const navigationItems = navigationItemsData.map((item) => {
    return (
      <li key={item.id} className="navigation__item">
        <Button buttonData={item.button}>
          <Icon iconData={item.icon}/>
        </Button>
      </li>
    );
  });

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navigationItems}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  onMenuSwitch: PropTypes.func.isRequired,
  onModalSwitch: PropTypes.func.isRequired,
  menuDefault: PropTypes.bool.isRequired,
  modalDefault: PropTypes.bool.isRequired,
  onSearchSwitch: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    menuDefault: state.menuDefault,
    modalDefault: state.modalDefault,
    searchDefault: state.searchDefault
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuSwitch: () => dispatch(onMenuSwitchAction()),
    onModalSwitch: (id, type) => dispatch(onModalSwitchAction(id, type)),
    onSearchSwitch: (searchDefault) => dispatch(onSearchSwitchAction(searchDefault)),
    onSearchChange: (searchData) => dispatch(onSearchChangeAction(searchData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
