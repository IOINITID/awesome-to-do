import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onMenuSwitchAction, onFilterChangeAction, onSearchSwitchAction, onSearchChangeAction} from '../../actions/index.js';
import FixedIcon from '../../assets/images/fixed-icon.svg';
import AddIcon from '../../assets/images/add-icon.svg';

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

  return (
    <section className={menuClassName}>
      <ul className="menu__list">
        <li className="menu__item">
          <a className="menu__link" href="#" data-type="all" onClick={onFilterItemClick}>
            Все задачи
            <sup className="menu__quantity">{itemsAll}</sup>
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#" data-type="undone" onClick={onFilterItemClick}>
            Текущие
            <sup className="menu__quantity">{itemsNotDone}</sup>
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#" data-type="done" onClick={onFilterItemClick}>
            Выполненные
            <sup className="menu__quantity">{itemsDone}</sup>
          </a>
        </li>
        <li className="menu__item menu__item--fixed">
          <a className="menu__link" href="#" data-type="fixed" onClick={onFilterItemClick}>
            <FixedIcon className="menu__icon" width="17" height="17" />
            Закреплённые
          </a>
        </li>
        <li className="menu__item menu__item--add">
          <a className="menu__link" href="#" onClick={onAddLinkClick}>
            <AddIcon className="menu__icon" width="17" height="17" />
            Добавить задачу
          </a>
        </li>
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
