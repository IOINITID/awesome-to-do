const initialState = {
  themeDefault: window.localStorage.getItem(`themeDefault`) || `true`,
  menuDefault: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `THEME_SWITCH`:
      return state.themeDefault === `true` ? {...state, themeDefault: `false`} : {...state, themeDefault: `true`};
    case `MENU_SWITCH`:
      return {...state, menuDefault: !state.menuDefault};
    default:
      return state;
  }
};

export default reducer;
