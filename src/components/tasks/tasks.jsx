import React from 'react';
import PropTypes from 'prop-types';
import Task from '../task/task.jsx';
import {connect} from 'react-redux';
import {onSearch, onFilter} from '../../utils/common.js';

const Tasks = (props) => {
  const {itemsData, filterType, searchData} = props;

  const itemsDataSorted = itemsData.slice().sort((a, b) => b.fixed - a.fixed).sort((a, b) => a.done - b.done);
  const itemsDataToShow = onFilter(onSearch(itemsDataSorted, searchData), filterType);

  let tasksTitle;

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

  return (
    <section className="tasks">
      <h2 className="tasks__title">{tasksTitle}</h2>
      <ul className="tasks__list">
        {
          itemsDataToShow.map((item) => {
            const {id, title, done, fixed, more} = item;

            let tasksItemClassName;

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
          })
        }
      </ul>
    </section>
  );
};

Tasks.propTypes = {
  itemsData: PropTypes.array.isRequired,
  filterType: PropTypes.string.isRequired,
  searchData: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    filterType: state.filterType,
    itemsData: state.itemsData,
    searchData: state.searchData
  };
};

export default connect(mapStateToProps)(Tasks);
