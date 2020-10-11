import {v4 as uuid} from 'uuid';

const initialState = {
  themeDefault: window.localStorage.getItem(`themeDefault`) || `true`,
  menuDefault: true,
  searchDefault: true,
  searchData: ``,
  searching: false,
  wellcomeDefault: window.localStorage.getItem(`wellcomeDefault`) || `true`,
  itemsData: JSON.parse(window.localStorage.getItem(`itemsData`)) || [],
  filterType: ``,

  modalDefault: true,
  modalType: ``,
  modalField: ``,
  currentId: ``,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `THEME_SWITCH`:
      return state.themeDefault === `true` ? {...state, themeDefault: `false`} : {...state, themeDefault: `true`};
    case `MENU_SWITCH`:
      return {...state, menuDefault: !state.menuDefault};
    case `SEARCH_SWITCH`:
      return {...state, searchDefault: !state.searchDefault};
    case `SEARCH_CHANGE`:
      return {...state, searchData: action.payload};
    case `SEARCHING`:
      return {...state, searching: action.payload};
    case `WELLCOME_SWITCH`:
      return state.wellcomeDefault === `true` ? {...state, wellcomeDefault: `false`} : {...state, wellcomeDefault: `false`};
    case `TASK_ADD`:
      const itemsData = state.itemsData.slice();
      const itemData = {
        id: uuid(),
        title: action.payload,
        done: false,
        fixed: false
      };

      itemsData.push(itemData);

      return {...state, wellcomeDefault: `false`, itemsData};
    case `FILTER_CHANGE`:
      return {...state, filterType: action.payload};
    case `TASK_DELETE`:
      return {...state, itemsData: state.itemsData.filter((item) => item.id !== action.payload)};
    case `TASK_FIXED`:
      const itemsDataFixed = state.itemsData.slice();

      itemsDataFixed.map((item) => {
        if (item.id === action.payload) {
          item.fixed = !item.fixed;
        }
      });

      return {...state, itemsData: itemsDataFixed};
    case `TASK_DONE`:
      const itemsDataDone = state.itemsData.slice();

      itemsDataDone.map((item) => {
        if (item.id === action.payload) {
          item.done = !item.done;
          item.fixed = false;
        }
      });

      return {...state, itemsData: itemsDataDone};
    case `TASK_EDIT`:
      const itemsDataEdit = state.itemsData.slice();

      itemsDataEdit.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
        }
      });

      return {...state, itemsData: itemsDataEdit};
    case `MODAL_SWITCH`:

      const modalTask = state.itemsData.filter((item) => item.id === action.payload.id);
      const [{title: modalField = ``} = {}] = modalTask;
      const currentId = action.payload.id || ``;

      return {...state, currentId, modalDefault: !state.modalDefault, modalType: action.payload.type, modalField};
    default:
      return state;
  }
};

export default reducer;
