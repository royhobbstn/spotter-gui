//

const default_state = {
  // global
  active_menu_item: 'Configure', // Status, Launch, Configure, Setup
  saved_profiles: {}, // load from JSON
  image_list: {}, // load from JSON
  selected_profiles: {}, // load from JSON
  all_profiles: {}, // load from JSON

  // setup
  setup_page_status: '', // loading, content, error

  // configure
  configure_page_status: '',

  // launch
  launch_selected_services: [],
  selected_launch_profile: 'None',
  available_services: ['aws', 'microsoft', 'google'], // should probably be somewhere else
  launch_page_status: '',
  launch_page_content: '',

  // status
  instance_data: {},
  instance_data_loading: false,
  instance_data_error: false
};

const app_reducer = (state = default_state, action) => {
  switch (action.type) {
    // Status

    case 'INSTANCE_DATA_LOADING':
      return Object.assign({}, state, {
        active_menu_item: 'Status',
        instance_data_loading: true,
        instance_data_error: false
      });
    case 'INSTANCE_DATA_ERROR':
      return Object.assign({}, state, {
        active_menu_item: 'Status',
        instance_data_loading: false,
        instance_data_error: true
      });
    case 'LOAD_INSTANCE_DATA':
      return Object.assign({}, state, {
        active_menu_item: 'Status',
        instance_data_loading: false,
        instance_data_error: false,
        instance_data: action.instance_data
      });

    // Setup

    case 'RESET_SETUP_PAGE':
      return Object.assign({}, state, {
        active_menu_item: 'Setup',
        setup_page_status: 'loading'
      });
    case 'DISPLAY_SETUP_PAGE_ERROR':
      return Object.assign({}, state, {
        setup_page_status: 'error'
      });
    case 'UPDATE_AVAILABLE_CREDENTIAL_PROFILES':
      return Object.assign({}, state, {
        setup_page_status: 'content',
        all_profiles: action.profiles,
        selected_profiles: action.selected_profiles
      });

    // Configure

    case 'RESET_CONFIGURE_PAGE':
      return Object.assign({}, state, {
        active_menu_item: 'Configure',
        configure_page_status: 'loading',
        configure_page_content: 'Loading'
      });
    case 'DISPLAY_CONFIGURE_PAGE_ERROR':
      return Object.assign({}, state, {
        configure_page_status: 'error',
        configure_page_content: action.error
      });
    case 'LOAD_PROFILE_DATA':
      return Object.assign({}, state, {
        configure_page_status: 'content',
        saved_profiles: action.saved_profiles,
        image_list: action.image_list
      });

    // Launch

    case 'UPDATE_SELECTED_LAUNCH_PROFILE':
      return Object.assign({}, state, { selected_launch_profile: action.profile });

    case 'TOGGLE_SERVICE_CHECKBOX':
      let updated_services = [];
      if (state.launch_selected_services.includes(action.service)) {
        updated_services = state.launch_selected_services.filter(s => s !== action.service);
      } else {
        updated_services = [...state.launch_selected_services, action.service];
      }

      return Object.assign({}, state, {
        launch_selected_services: updated_services
      });

    case 'RESET_LAUNCH_PAGE':
      return Object.assign({}, state, {
        active_menu_item: 'Launch',
        launch_page_status: 'loading',
        launch_page_content: 'Loading'
      });
    case 'DISPLAY_LAUNCH_PAGE_ERROR':
      return Object.assign({}, state, {
        launch_page_status: 'error',
        launch_page_content: action.error
      });
    case 'DISPLAY_LAUNCH_PAGE_CONTENT':
      return Object.assign({}, state, {
        launch_page_status: 'content',
        launch_page_content: action.content
      });

    default:
      return state;
  }
};

export default app_reducer;
