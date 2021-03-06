import { ActionTypes } from '../utils/constants';

interface IAction {
  type: string;
  payload?: any;
}

const onLanguageChangeAction = () => {
  return {
    type: 'LANGUAGE_CHANGE',
  };
};

const onThemeSwitchAction = (): IAction => {
  return {
    type: ActionTypes.THEME_SWITCH,
  };
};

const onMenuSwitchAction = (): IAction => {
  return {
    type: ActionTypes.MENU_SWITCH,
  };
};

const onSearchSwitchAction = (): IAction => {
  return {
    type: ActionTypes.SEARCH_SWITCH,
  };
};

const onSearchCloseAction = (): IAction => {
  return {
    type: ActionTypes.SEARCH_CLOSE,
  };
};

const onSearchChangeAction = (searchData: string = ``): IAction => {
  return {
    type: ActionTypes.SEARCH_CHANGE,
    payload: searchData,
  };
};

const onSearchingAction = (searching: boolean): IAction => {
  return {
    type: ActionTypes.SEARCHING,
    payload: searching,
  };
};

const onWelcomeSwitchAction = (isWelcome = false): IAction => {
  return {
    type: ActionTypes.WELCOME_SWITCH,
    payload: isWelcome,
  };
};

const onTaskAddAction = (title: string): IAction => {
  return {
    type: ActionTypes.TASK_ADD,
    payload: title,
  };
};

const onFilterChangeAction = (filterType: string): IAction => {
  return {
    type: ActionTypes.FILTER_CHANGE,
    payload: filterType,
  };
};

const onTaskDeleteAction = (id: string): IAction => {
  return {
    type: ActionTypes.TASK_DELETE,
    payload: id,
  };
};

const onTaskFixedAction = (id: string): IAction => {
  return {
    type: ActionTypes.TASK_FIXED,
    payload: id,
  };
};

const onTaskDoneAction = (id: string): IAction => {
  return {
    type: ActionTypes.TASK_DONE,
    payload: id,
  };
};

const onTaskEditAction = (id: string, title: string) => {
  return {
    type: ActionTypes.TASK_EDIT,
    payload: {
      id,
      title,
    },
  };
};

const onModalSwitchAction = (id: string, type: string = `add`): IAction => {
  return {
    type: ActionTypes.MODAL_SWITCH,
    payload: {
      id,
      type,
    },
  };
};

const onMoreSwitchAction = (id: string): IAction => {
  return {
    type: ActionTypes.MORE_SWITCH,
    payload: id,
  };
};

const onMoreCloseAction = (): IAction => {
  return {
    type: ActionTypes.MORE_CLOSE,
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
  onMoreCloseAction,
  onLanguageChangeAction,
};
