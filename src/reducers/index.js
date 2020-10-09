const initialState = {
  themeDefault: window.localStorage.getItem(`themeDefault`) || `true`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `THEME_SWITCH`:
      return state.themeDefault === `true` ? {themeDefault: `false`} : {themeDefault: `true`};
    default:
      return state;
  }
};

export default reducer;
