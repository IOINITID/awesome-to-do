const initialState = {
  themeDefault: window.localStorage.getItem(`themeDefault`) || `true`,
  menuDefault: true,
  searchDefault: true,
  searchData: ``,
  searching: false
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
    default:
      return state;
  }
};

export default reducer;
