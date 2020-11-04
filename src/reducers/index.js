import {v4 as uuid} from 'uuid';
import {
  THEME_SWITCH,
  MENU_SWITCH,
  SEARCH_SWITCH,
  SEARCH_CLOSE,
  SEARCH_CHANGE,
  SEARCHING,
  WELCOME_SWITCH,
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

const initialState = {
  theme: window.localStorage.getItem(`theme`) || `dark`,
  itemsData: JSON.parse(window.localStorage.getItem(`itemsData`)) || [],
  isModalOpen: false,
  isMenuOpen: false,
  isSearchOpen: false,
  searchData: ``,
  searching: false,
  isWelcome: true,
  filterType: ``,
  modalType: ``,
  modalField: ``,
  currentId: ``,
  title: ``
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_SWITCH:
      return state.theme === `dark` ? {...state, theme: `light`} : {...state, theme: `dark`};
    case MENU_SWITCH:
      return {...state, isMenuOpen: !state.isMenuOpen};
    case SEARCH_SWITCH:
      return {...state, isSearchOpen: !state.isSearchOpen};
    case SEARCH_CLOSE:
      return {...state, isSearchOpen: false};
    case SEARCH_CHANGE:
      return {...state, searchData: action.payload};
    case SEARCHING:
      return {...state, searching: action.payload};
    case WELCOME_SWITCH:
      return {...state, isWelcome: false};
    case TASK_ADD:
      const itemsData = state.itemsData.slice();
      const itemData = {
        id: uuid(),
        title: action.payload,
        done: false,
        fixed: false,
        more: false
      };

      itemsData.push(itemData);

      return {...state, isWelcome: false, itemsData};
    case FILTER_CHANGE:
      return {...state, filterType: action.payload};
    case TASK_DELETE:
      return {...state, itemsData: state.itemsData.filter((item) => item.id !== action.payload)};
    case TASK_FIXED:
      const itemsDataFixed = state.itemsData.slice();

      itemsDataFixed.map((item) => {
        if (item.id === action.payload) {
          item.fixed = !item.fixed;
        }
      });

      return {...state, itemsData: itemsDataFixed};
    case TASK_DONE:
      const itemsDataDone = state.itemsData.slice();

      itemsDataDone.map((item) => {
        if (item.id === action.payload) {
          item.done = !item.done;
          item.fixed = false;
        }
      });

      return {...state, itemsData: itemsDataDone};
    case TASK_EDIT:
      const itemsDataEdit = state.itemsData.slice();

      itemsDataEdit.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
        }
      });

      return {...state, itemsData: itemsDataEdit};
    case MODAL_SWITCH:
      const modalTask = state.itemsData.filter((item) => item.id === action.payload.id);
      const [{title: modalField = ``} = {}] = modalTask;
      const currentId = action.payload.id || ``;

      return {...state, currentId, isModalOpen: !state.isModalOpen, modalType: action.payload.type, modalField};
    case MORE_SWITCH:
      const itemsDataMore = state.itemsData.slice();

      itemsDataMore.map((item) => {
        if (item.id === action.payload) {
          item.more = !item.more;
        } else {
          item.more = false;
        }
      });

      return {...state, itemsData: itemsDataMore};
    case MORE_CLOSE:
      const itemsDataToClose = state.itemsData.slice();

      itemsDataToClose.map((item) => {
        item.more = false;
      });

      return {...state, itemsData: itemsDataToClose};
    default:
      return state;
  }
};

export default reducer;
