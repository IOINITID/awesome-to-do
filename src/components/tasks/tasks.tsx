import React from 'react';
import Task from '../task/task';
import {connect} from 'react-redux';
import {onSearch, onFilter} from '../../utils/common';

interface IItemsData {
  done: boolean;
  fixed: boolean;
  id: string;
  more: boolean;
  title: string;
}

interface ITasks {
  itemsData: Array<IItemsData>;
  filterType: string;
  searchData: string;
}

const Tasks = (props: ITasks) => {
  const {itemsData, filterType, searchData} = props;

  const itemsDataSorted: Array<IItemsData> = itemsData.slice().sort((a: any, b: any) => b.fixed - a.fixed).sort((a: any, b: any) => a.done - b.done);
  const itemsDataToShow: Array<IItemsData> = onFilter(onSearch(itemsDataSorted, searchData), filterType);

  let tasksTitle: string;

  switch (filterType) {
    case `all`:
      tasksTitle = `Все задачи`;
      break;
    case `done`:
      tasksTitle = `Выполненные`;
      break;
    case `undone`:
      tasksTitle = `Текущие`;
      break;
    case `fixed`:
      tasksTitle = `Закреплённые`;
      break;
    default:
      tasksTitle = `Все задачи`;
      break;
  }

  const taskItems = itemsDataToShow.map((item) => {
    const {id, title, done, fixed, more} = item;

    let tasksItemClassName: string;

    switch (true) {
      case fixed:
        tasksItemClassName = `tasks__item tasks__item--fixed`;
        break;
      case done:
        tasksItemClassName = `tasks__item tasks__item--done`;
        break;
      default:
        tasksItemClassName = `tasks__item`;
        break;
    }

    return (
      <li key={id} className={tasksItemClassName}>
        <Task id={id} title={title} done={done} fixed={fixed} more={more} />
      </li>
    );
  });

  return (
    <section className="tasks">
      <h2 className="tasks__title">{tasksTitle}</h2>
      <ul className="tasks__list">
        {taskItems}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    filterType: state.filterType,
    itemsData: state.itemsData,
    searchData: state.searchData
  };
};

export default connect(mapStateToProps)(Tasks);
