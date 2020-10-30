import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onMenuSwitchAction, onFilterChangeAction, onSearchSwitchAction, onSearchChangeAction} from '../../actions/index.js';
import {v4 as uuid} from 'uuid';
import Icon from '../icon/icon.jsx';

const Menu = (props) => {
  const {itemsQuantity, menuDefault, onModalSwitch, onMenuSwitch, onFilterChange, onSearchSwitch, onSearchChange} = props;
  const [itemsAll, itemsDone, itemsNotDone] = itemsQuantity;

  const onFilterItemClick = (evt) => {
    evt.preventDefault();

    const filterType = evt.target.dataset.type;

    onFilterChange(filterType);
    onMenuSwitch();
    onSearchSwitch(true);
    onSearchChange(``);
  };

  const onAddLinkClick = (evt) => {
    evt.preventDefault();

    onModalSwitch();
    onMenuSwitch();
    onSearchSwitch(true);
    onSearchChange(``);
  };

  const menuClassName = menuDefault ? `menu` : `menu menu--active`;

  const menuItemsData = [
    {
      id: uuid(),
      title: `Все задачи`,
      dataType: `all`,
      events: {
        onClick: onFilterItemClick
      },
      quantity: itemsAll,
      iconData: null
    },
    {
      id: uuid(),
      title: `Текущие`,
      dataType: `undone`,
      events: {
        onClick: onFilterItemClick
      },
      quantity: itemsNotDone,
      iconData: null
    },
    {
      id: uuid(),
      title: `Выполненные`,
      dataType: `done`,
      events: {
        onClick: onFilterItemClick
      },
      quantity: itemsDone,
      iconData: null
    },
    {
      id: uuid(),
      title: `Закреплённые`,
      dataType: `fixed`,
      events: {
        onClick: onFilterItemClick
      },
      quantity: null,
      iconData: {
        className: `menu`,
        name: `pin`,
        width: 17,
        height: 17
      }
    },
    {
      id: uuid(),
      title: `Добавить задачу`,
      dataType: `add`,
      events: {
        onClick: onAddLinkClick
      },
      quantity: null,
      iconData: {
        className: `menu`,
        name: `add`,
        width: 17,
        height: 17
      }
    }
  ];

  const menuItems = menuItemsData.map((item) => {
    return (
      <li key={item.id} className={`menu__item menu__item--${item.dataType}`}>
        <a className="menu__link" href="#" data-type={item.dataType} onClick={item.events.onClick}>
          {item.iconData && <Icon iconData={item.iconData} />}
          {item.title && item.title}
          {item.quantity !== null && <sup className="menu__quantity">{item.quantity}</sup>}
        </a>
      </li>
    );
  });

  return (
    <section className={menuClassName}>
      <ul className="menu__list">
        {menuItems}
      </ul>
    </section>
  );
};

Menu.propTypes = {
  itemsQuantity: PropTypes.array.isRequired,
  menuDefault: PropTypes.bool.isRequired,
  onModalSwitch: PropTypes.func.isRequired,
  onMenuSwitch: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onSearchSwitch: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    menuDefault: state.menuDefault
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuSwitch: () => dispatch(onMenuSwitchAction()),
    onFilterChange: (filterType) => dispatch(onFilterChangeAction(filterType)),
    onSearchSwitch: (searchDefault) => dispatch(onSearchSwitchAction(searchDefault)),
    onSearchChange: (searchData) => dispatch(onSearchChangeAction(searchData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
