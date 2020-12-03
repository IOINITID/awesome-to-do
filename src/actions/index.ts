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

const onSearchChangeAction = (searchData: string = ``) => {
  return {
    type: ActionTypes.SEARCH_CHANGE,
    payload: searchData
  };
};

const onSearchingAction = (searching: boolean) => {
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

const onTaskAddAction = (title: string) => {
  return {
    type: ActionTypes.TASK_ADD,
    payload: title
  };
};

const onFilterChangeAction = (filterType: string) => {
  return {
    type: ActionTypes.FILTER_CHANGE,
    payload: filterType
  };
};

const onTaskDeleteAction = (id: string) => {
  return {
    type: ActionTypes.TASK_DELETE,
    payload: id
  };
};

const onTaskFixedAction = (id: string) => {
  return {
    type: ActionTypes.TASK_FIXED,
    payload: id
  };
};

const onTaskDoneAction = (id: string) => {
  return {
    type: ActionTypes.TASK_DONE,
    payload: id
  };
};

const onTaskEditAction = (id: string, title: string) => {
  return {
    type: ActionTypes.TASK_EDIT,
    payload: {
      id,
      title
    }
  };
};

const onModalSwitchAction = (id: string, type: string = `add`) => {
  return {
    type: ActionTypes.MODAL_SWITCH,
    payload: {
      id,
      type
    }
  };
};

const onMoreSwitchAction = (id: string) => {
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
