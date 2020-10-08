const initialState = {
  theme: window.localStorage.getItem(`theme`) || `dark`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `THEME_SWITCH`:
      return state.theme === `dark` ? {theme: `light`} : {theme: `dark`};
    default:
      return state;
  }
};

export default reducer;
