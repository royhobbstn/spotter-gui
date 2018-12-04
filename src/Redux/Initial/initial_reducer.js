//

const default_state = {
  // global
  app_loading: true,
  active_menu_item: 'Status' // Status, Profiles, Credentials, Images
};

export const initial_reducer = (state = default_state, action) => {
  switch (action.type) {
    // initial

    case 'INSTANCE_DATA_LOADING':
      return Object.assign({}, state, {
        active_menu_item: 'Status'
      });
    case 'INSTANCE_DATA_ERROR':
      return Object.assign({}, state, {
        active_menu_item: 'Status'
      });
    case 'LOAD_INSTANCE_DATA':
      return Object.assign({}, state, {
        active_menu_item: 'Status',
        app_loading: false
      });

    // credentials

    case 'CHANGE_PAGE_TO_CREDENTIALS':
      return Object.assign({}, state, {
        active_menu_item: 'Credentials'
      });

    // images

    case 'CHANGE_PAGE_TO_IMAGES':
      return Object.assign({}, state, {
        active_menu_item: 'Images'
      });

    // profile

    case 'DISPLAY_PROFILE_PAGE':
      return Object.assign({}, state, {
        active_menu_item: 'Profile'
      });

    case 'RESET_PROFILE_PAGE':
      return Object.assign({}, state, {
        active_menu_item: 'Profile'
      });

    default:
      return state;
  }
};
