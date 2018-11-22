
const default_state = {
  active_menu_item: 'Setup'
};

const app_reducer = (
  state = default_state,
  action
) => {
  switch (action.type) {
    case 'UPDATE_ACTIVE_MENU_ITEM':
      return Object.assign({}, state, { active_menu_item: action.item });

    default:
      return state;
  }
};

export default app_reducer;