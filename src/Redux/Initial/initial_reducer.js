//

const default_state = {
  // global
  app_loading: true,
  active_menu_item: 'Status', // Status, Launch, Configure, Setup
  saved_profiles: {}, // load from JSON
  image_list: {}, // load from JSON
  selected_profiles: {}, // load from JSON
  all_profiles: {} // load from JSON
};

const initial_reducer = (state = default_state, action) => {
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

    // setup
    case 'RESET_SETUP_PAGE':
      return Object.assign({}, state, {
        active_menu_item: 'Setup'
      });
    case 'UPDATE_AVAILABLE_CREDENTIAL_PROFILES':
      return Object.assign({}, state, {
        all_profiles: action.profiles,
        selected_profiles: action.selected_profiles
      });

    // launch

    case 'RESET_LAUNCH_PAGE':
      return Object.assign({}, state, {
        active_menu_item: 'Launch'
      });

    // configure

    case 'RESET_CONFIGURE_PAGE':
      return Object.assign({}, state, {
        active_menu_item: 'Configure'
      });
    case 'LOAD_PROFILE_DATA':
      return Object.assign({}, state, {
        saved_profiles: action.saved_profiles,
        image_list: action.image_list
      });

    default:
      return state;
  }
};

export default initial_reducer;
