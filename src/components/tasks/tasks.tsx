import React, { useEffect } from 'react';
import Task from '../task/task';
import { connect } from 'react-redux';
import { onSearch, onFilter } from '../../utils/common';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

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
  language: string;
}

const Tasks = (props: ITasks) => {
  const { itemsData, filterType, searchData, language } = props;

  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const itemsDataSorted: Array<IItemsData> = itemsData
    .slice()
    .sort((a: any, b: any) => b.fixed - a.fixed)
    .sort((a: any, b: any) => a.done - b.done);
  const itemsDataToShow: Array<IItemsData> = onFilter(onSearch(itemsDataSorted, searchData), filterType);

  let tasksTitle: string;

  switch (filterType) {
    case `all`:
      tasksTitle = t('Все задачи');
      break;
    case `done`:
      tasksTitle = t('Выполненные');
      break;
    case `undone`:
      tasksTitle = t('Текущие');
      break;
    case `fixed`:
      tasksTitle = t('Закреплённые');
      break;
    default:
      tasksTitle = t('Все задачи');
      break;
  }

  const taskItems = itemsDataToShow.map((item) => {
    const { id, title, done, fixed, more } = item;

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
      <ul className="tasks__list">{taskItems}</ul>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    filterType: state.app.filterType,
    itemsData: state.app.itemsData,
    searchData: state.app.searchData,
    language: state.app.language,
  };
};

export default connect(mapStateToProps)(Tasks);
