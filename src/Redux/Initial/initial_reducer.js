//

const default_state = {
  // global
  app_loading: true,
  active_menu_item: 'Status', // Status, Configure, Setup
  launch_profiles: {}, // load from JSON
  image_list: {}, // load from JSON
  credentials: {} // load from JSON
};

const initial_reducer = (state = default_state, action) => {
  switch (action.type) {
    // initial

    case 'UPDATE_BASE_DATA':
      return Object.assign({}, state, {
        credentials: action.credentials,
        image_list: action.image_list,
        launch_profiles: action.launch_profiles
      });

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
    case 'CHANGE_PAGE_TO_SETUP':
      return Object.assign({}, state, {
        active_menu_item: 'Setup'
      });

    // configure

    case 'DISPLAY_CONFIGURE_PAGE':
      return Object.assign({}, state, {
        active_menu_item: 'Configure'
      });
    case 'ADD_F1_PROFILE':
      const updated_profiles = { profiles: [...state.launch_profiles.profiles, action.data] };
      return Object.assign({}, state, { launch_profiles: updated_profiles });
    case 'RESET_CONFIGURE_PAGE':
      return Object.assign({}, state, {
        active_menu_item: 'Configure'
      });
    case 'LOAD_PROFILE_DATA':
      return Object.assign({}, state, {
        launch_profiles: action.launch_profiles,
        image_list: action.image_list
      });
    case 'DELETE_PROFILE':
      const profile_copy = {
        profiles: [
          ...state.launch_profiles.profiles.filter(p => {
            return p.profileLabel !== action.profile;
          })
        ]
      };
      return Object.assign({}, state, {
        launch_profiles: profile_copy
      });

    default:
      return state;
  }
};

export default initial_reducer;
