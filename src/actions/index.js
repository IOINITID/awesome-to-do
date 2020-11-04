import {
  THEME_SWITCH,
  MENU_SWITCH,
  SEARCH_SWITCH,
  SEARCH_CLOSE,
  SEARCH_CHANGE,
  SEARCHING,
  WELLCOME_SWITCH,
  TASK_ADD,
  FILTER_CHANGE,
  TASK_DELETE,
  TASK_FIXED,
  TASK_DONE,
  TASK_EDIT,
  MODAL_SWITCH,
  MORE_SWITCH,
  MORE_CLOSE
} from '../utils/constants.js';

const onThemeSwitchAction = () => {
  return {
    type: THEME_SWITCH
  };
};

const onMenuSwitchAction = () => {
  return {
    type: MENU_SWITCH
  };
};

const onSearchSwitchAction = () => {
  return {
    type: SEARCH_SWITCH
  };
};

const onSearchCloseAction = () => {
  return {
    type: SEARCH_CLOSE
  };
};

const onSearchChangeAction = (searchData = ``) => {
  return {
    type: SEARCH_CHANGE,
    payload: searchData
  };
};

const onSearchingAction = (searching) => {
  return {
    type: SEARCHING,
    payload: searching
  };
};

const onWellcomeSwitchAction = () => {
  return {
    type: WELLCOME_SWITCH
  };
};

const onTaskAddAction = (title) => {
  return {
    type: TASK_ADD,
    payload: title
  };
};

const onFilterChangeAction = (filterType) => {
  return {
    type: FILTER_CHANGE,
    payload: filterType
  };
};

const onTaskDeleteAction = (id) => {
  return {
    type: TASK_DELETE,
    payload: id
  };
};

const onTaskFixedAction = (id) => {
  return {
    type: TASK_FIXED,
    payload: id
  };
};

const onTaskDoneAction = (id) => {
  return {
    type: TASK_DONE,
    payload: id
  };
};

const onTaskEditAction = (id, title) => {
  return {
    type: TASK_EDIT,
    payload: {
      id,
      title
    }
  };
};

const onModalSwitchAction = (id, type = `add`) => {
  return {
    type: MODAL_SWITCH,
    payload: {
      id,
      type
    }
  };
};

const onMoreSwitchAction = (id) => {
  return {
    type: MORE_SWITCH,
    payload: id
  };
};

const onMoreCloseAction = () => {
  return {
    type: MORE_CLOSE
  };
};

export {
  onThemeSwitchAction,
  onMenuSwitchAction,
  onSearchSwitchAction,
  onSearchChangeAction,
  onSearchingAction,
  onWellcomeSwitchAction,
  onTaskAddAction,
  onFilterChangeAction,
  onTaskDeleteAction,
  onTaskFixedAction,
  onTaskDoneAction,
  onTaskEditAction,
  onModalSwitchAction,
  onMoreSwitchAction,
  onSearchCloseAction,
  onMoreCloseAction
};
