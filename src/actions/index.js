const onThemeSwitchAction = () => {
  return {type: `THEME_SWITCH`};
};

const onMenuSwitchAction = () => {
  return {type: `MENU_SWITCH`};
};

const onSearchSwitchAction = () => {
  return {type: `SEARCH_SWITCH`};
};

const onSearchChangeAction = (searchData) => {
  return {
    type: `SEARCH_CHANGE`,
    payload: searchData
  };
};

export {
  onThemeSwitchAction,
  onMenuSwitchAction,
  onSearchSwitchAction,
  onSearchChangeAction
};
