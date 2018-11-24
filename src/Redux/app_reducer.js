//

const default_state = {
  active_menu_item: 'Status',
  setup_page_status: '', // loading, content, error
  setup_page_credentials: {},
  configure_page_status: '',
  configure_page_content: '',
  launch_page_status: '',
  launch_page_content: '',
  status_page_status: '',
  status_page_content: '',
  instance_data: {},
  instance_data_loading: false,
  instance_data_error: false
};

const app_reducer = (state = default_state, action) => {
  switch (action.type) {
    case 'INSTANCE_DATA_LOADING':
      return Object.assign({}, state, { instance_data_loading: true, instance_data_error: false });
    case 'INSTANCE_DATA_ERROR':
      return Object.assign({}, state, { instance_data_loading: false, instance_data_error: true });
    case 'LOAD_INSTANCE_DATA':
      return Object.assign({}, state, {
        instance_data_loading: false,
        instance_data_error: false,
        instance_data: action.instance_data
      });

    //
    case 'RESET_SETUP_PAGE':
      return Object.assign({}, state, {
        active_menu_item: 'Setup',
        setup_page_status: 'loading',
        setup_page_credentials: {}
      });
    case 'DISPLAY_SETUP_PAGE_ERROR':
      return Object.assign({}, state, {
        setup_page_status: 'error',
        setup_page_credentials: {}
      });
    case 'DISPLAY_SETUP_PAGE_CONTENT':
      return Object.assign({}, state, {
        setup_page_status: 'content',
        setup_page_credentials: action.credentials
      });
    //
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
    case 'DISPLAY_CONFIGURE_PAGE_CONTENT':
      return Object.assign({}, state, {
        configure_page_status: 'content',
        configure_page_content: action.content
      });
    //
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
    //
    case 'RESET_STATUS_PAGE':
      return Object.assign({}, state, {
        active_menu_item: 'Status',
        status_page_status: 'loading',
        status_page_content: 'Loading'
      });
    case 'DISPLAY_STATUS_PAGE_ERROR':
      return Object.assign({}, state, {
        status_page_status: 'error',
        status_page_content: action.error
      });
    case 'DISPLAY_STATUS_PAGE_CONTENT':
      return Object.assign({}, state, {
        status_page_status: 'content',
        status_page_content: action.content
      });
    default:
      return state;
  }
};

export default app_reducer;
