import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onMenuSwitchAction, onFilterChangeAction, onModalSwitchAction} from '../../actions/index.js';
import FixedIcon from '../../assets/images/fixed-icon.svg';
import AddIcon from '../../assets/images/add-icon.svg';

const Menu = (props) => {
  const {itemsData, isMenuOpen, onModalSwitch, onMenuSwitch, onFilterChange} = props;

  const itemsAll = itemsData.length;
  const itemsDone = itemsData.filter((item) => item.done).length;
  const itemsNotDone = itemsData.filter((item) => !item.done).length;


  const onFilterItemClick = (evt) => {
    evt.preventDefault();

    const filterType = evt.target.dataset.type;

    onFilterChange(filterType);
    onMenuSwitch();
  };

  const onAddLinkClick = (evt) => {
    evt.preventDefault();

    onModalSwitch();
    onMenuSwitch();
  };

  const menuClassName = isMenuOpen ? `menu menu--active` : `menu`;

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
  isMenuOpen: PropTypes.bool.isRequired,
  onModalSwitch: PropTypes.func.isRequired,
  onMenuSwitch: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  itemsData: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    isMenuOpen: state.isMenuOpen,
    itemsData: state.itemsData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuSwitch: () => dispatch(onMenuSwitchAction()),
    onFilterChange: (filterType) => dispatch(onFilterChangeAction(filterType)),
    onModalSwitch: (id, type) => dispatch(onModalSwitchAction(id, type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
