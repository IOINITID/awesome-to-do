import React from 'react';
import {connect} from 'react-redux';
import {onMenuSwitchAction, onFilterChangeAction, onModalSwitchAction} from '../../actions/index';
import FixedIcon from '../../assets/images/fixed-icon.svg';
import AddIcon from '../../assets/images/add-icon.svg';

interface IItemsData {
  done: boolean;
  fixed: boolean;
  id: string;
  more: boolean;
  title: string;
}

interface IMenu {
  isMenuOpen: boolean;
  onModalSwitch: () => void;
  onMenuSwitch: () => void;
  onFilterChange: (firstArg: string) => void;
  itemsData: Array<IItemsData>
}

const Menu = (props: IMenu) => {
  const {itemsData, isMenuOpen, onModalSwitch, onMenuSwitch, onFilterChange} = props;

  const itemsAll = itemsData.length;
  const itemsDone = itemsData.filter((item) => item.done).length;
  const itemsNotDone = itemsData.filter((item) => !item.done).length;

  const onFilterItemClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    const filterType: string = (evt.target as HTMLAnchorElement).dataset.type;

    onFilterChange(filterType);
    onMenuSwitch();
  };

  const onAddLinkClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    onModalSwitch();
    onMenuSwitch();
  };

  const menuClassName = isMenuOpen ? `menu menu--active` : `menu`;

  return (
    <section className={menuClassName}>
      <ul className="menu__list">
        <li className="menu__item">
          <a className="menu__link" href="#" data-type="all" aria-label="Все задачи." onClick={onFilterItemClick}>
            Все задачи
            <sup className="menu__quantity">{itemsAll}</sup>
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#" data-type="undone" aria-label="Текущие." onClick={onFilterItemClick}>
            Текущие
            <sup className="menu__quantity">{itemsNotDone}</sup>
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#" data-type="done" aria-label="Выполненные." onClick={onFilterItemClick}>
            Выполненные
            <sup className="menu__quantity">{itemsDone}</sup>
          </a>
        </li>
        <li className="menu__item menu__item--fixed">
          <a className="menu__link" href="#" data-type="fixed" aria-label="Закреплённые." onClick={onFilterItemClick}>
            <FixedIcon className="menu__icon" width="17" height="17" />
            Закреплённые
          </a>
        </li>
        <li className="menu__item menu__item--add">
          <a className="menu__link" href="#" aria-label="Добавить задачу." onClick={onAddLinkClick}>
            <AddIcon className="menu__icon" width="17" height="17" />
            Добавить задачу
          </a>
        </li>
      </ul>
    </section>
  );
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
