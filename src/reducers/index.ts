/* eslint-disable no-case-declarations */
import { v4 as uuid } from 'uuid';
import { ActionTypes } from '../utils/constants';

interface IItemsData {
  done: boolean;
  fixed: boolean;
  id: string;
  more: boolean;
  title: string;
}

interface IInitialState {
  itemsData: Array<IItemsData> | [];
  isModalOpen: boolean;
  filterType: string;
  modalType: string;
  modalField: string;
  currentId: string;
  title: string;
  language: string;
}

interface IAction {
  type: string;
  payload?: any;
}

const initialState: IInitialState = {
  itemsData: JSON.parse(window.localStorage.getItem('itemsData')) || [],
  isModalOpen: false,
  filterType: '',
  modalType: '',
  modalField: '',
  currentId: '',
  title: '',
  language: window.localStorage.getItem('language') || 'ru',
};

const reducer = (state: IInitialState = initialState, action: IAction): IInitialState => {
  switch (action.type) {
    // case ActionTypes.THEME_SWITCH:
    //   return state.theme === 'dark' ? { ...state, theme: 'light' } : { ...state, theme: 'dark' };
    // case ActionTypes.MENU_SWITCH:
    //   return { ...state, isMenuOpen: !state.isMenuOpen };
    case 'LANGUAGE_CHANGE':
      return { ...state, language: state.language === 'en' ? 'ru' : 'en' };
    // case ActionTypes.SEARCH_SWITCH:
    //   return { ...state, isSearchOpen: !state.isSearchOpen };
    // case ActionTypes.SEARCH_CLOSE:
    //   return { ...state, isSearchOpen: false };
    // case ActionTypes.SEARCH_CHANGE:
    //   return { ...state, searchData: action.payload };
    // case ActionTypes.SEARCHING:
    //   return { ...state, searching: action.payload };
    // case ActionTypes.WELCOME_SWITCH:
    //   return { ...state, isWelcome: action.payload };
    case ActionTypes.TASK_ADD:
      const itemsData = state.itemsData.slice();
      const itemData = {
        id: uuid(),
        title: action.payload,
        done: false,
        fixed: false,
        more: false,
      };

      itemsData.push(itemData);

      // return { ...state, isWelcome: false, itemsData };
      return { ...state, itemsData };
    case ActionTypes.FILTER_CHANGE:
      return { ...state, filterType: action.payload };
    case ActionTypes.TASK_DELETE:
      return { ...state, itemsData: state.itemsData.filter((item: any) => item.id !== action.payload) };
    case ActionTypes.TASK_FIXED:
      const itemsDataFixed = state.itemsData.slice();

      itemsDataFixed.map((item) => {
        if (item.id === action.payload) {
          item.fixed = !item.fixed;
        }
      });

      return { ...state, itemsData: itemsDataFixed };
    case ActionTypes.TASK_DONE:
      const itemsDataDone = state.itemsData.slice();

      itemsDataDone.map((item) => {
        if (item.id === action.payload) {
          item.done = !item.done;
          item.fixed = false;
        }
      });

      return { ...state, itemsData: itemsDataDone };
    case ActionTypes.TASK_EDIT:
      const itemsDataEdit = state.itemsData.slice();

      itemsDataEdit.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
        }
      });

      return { ...state, itemsData: itemsDataEdit };
    case ActionTypes.MODAL_SWITCH:
      const modalTask = state.itemsData.filter((item: any) => item.id === action.payload.id);
      const [{ title: modalField = '' } = {}] = modalTask;
      const currentId = action.payload.id || '';

      return { ...state, currentId, isModalOpen: !state.isModalOpen, modalType: action.payload.type, modalField };
    case ActionTypes.MORE_SWITCH:
      const itemsDataMore = state.itemsData.slice();

      itemsDataMore.map((item) => {
        if (item.id === action.payload) {
          item.more = !item.more;
        } else {
          item.more = false;
        }
      });

      return { ...state, itemsData: itemsDataMore };
    case ActionTypes.MORE_CLOSE:
      const itemsDataToClose = state.itemsData.slice();

      itemsDataToClose.map((item) => {
        item.more = false;
      });

      return { ...state, itemsData: itemsDataToClose };
    default:
      return state;
  }
};

export default reducer;
