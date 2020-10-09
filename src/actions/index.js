const onThemeSwitchAction = () => {
  return {type: `THEME_SWITCH`};
};

const onMenuSwitchAction = () => {
  return {type: `MENU_SWITCH`};
};

export {
  onThemeSwitchAction,
  onMenuSwitchAction
};
