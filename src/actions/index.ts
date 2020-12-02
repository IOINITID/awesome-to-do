import {ActionTypes} from '../utils/constants';

const onThemeSwitchAction = () => {
  return {
    type: ActionTypes.THEME_SWITCH
  };
};

const onMenuSwitchAction = () => {
  return {
    type: ActionTypes.MENU_SWITCH
  };
};

const onSearchSwitchAction = () => {
  return {
    type: ActionTypes.SEARCH_SWITCH
  };
};

const onSearchCloseAction = () => {
  return {
    type: ActionTypes.SEARCH_CLOSE
  };
};

const onSearchChangeAction = (searchData = ``) => {
  return {
    type: ActionTypes.SEARCH_CHANGE,
    payload: searchData
  };
};

const onSearchingAction = (searching) => {
  return {
    type: ActionTypes.SEARCHING,
    payload: searching
  };
};

const onWelcomeSwitchAction = () => {
  return {
    type: ActionTypes.WELCOME_SWITCH
  };
};

const onTaskAddAction = (title) => {
  return {
    type: ActionTypes.TASK_ADD,
    payload: title
  };
};

const onFilterChangeAction = (filterType) => {
  return {
    type: ActionTypes.FILTER_CHANGE,
    payload: filterType
  };
};

const onTaskDeleteAction = (id) => {
  return {
    type: ActionTypes.TASK_DELETE,
    payload: id
  };
};

const onTaskFixedAction = (id) => {
  return {
    type: ActionTypes.TASK_FIXED,
    payload: id
  };
};

const onTaskDoneAction = (id) => {
  return {
    type: ActionTypes.TASK_DONE,
    payload: id
  };
};

const onTaskEditAction = (id, title) => {
  return {
    type: ActionTypes.TASK_EDIT,
    payload: {
      id,
      title
    }
  };
};

const onModalSwitchAction = (id, type = `add`) => {
  return {
    type: ActionTypes.MODAL_SWITCH,
    payload: {
      id,
      type
    }
  };
};

const onMoreSwitchAction = (id) => {
  return {
    type: ActionTypes.MORE_SWITCH,
    payload: id
  };
};

const onMoreCloseAction = () => {
  return {
    type: ActionTypes.MORE_CLOSE
  };
};

export {
  onThemeSwitchAction,
  onMenuSwitchAction,
  onSearchSwitchAction,
  onSearchChangeAction,
  onSearchingAction,
  onWelcomeSwitchAction,
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
