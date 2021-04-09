import { ActionTypes } from '../utils/constants';

interface IAction {
  type: string;
  payload?: any;
}

const onTaskAddAction = (title: string): IAction => {
  return {
    type: ActionTypes.TASK_ADD,
    payload: title,
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
  onTaskAddAction,
  onTaskDeleteAction,
  onTaskFixedAction,
  onTaskDoneAction,
  onTaskEditAction,
  onModalSwitchAction,
  onMoreSwitchAction,
  onMoreCloseAction,
};
