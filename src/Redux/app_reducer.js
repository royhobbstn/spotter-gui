//

const default_state = {
  active_menu_item: 'Status',
  setup_page_status: '', // loading, content, error
  setup_page_content: '',
  configure_page_status: '',
  configure_page_content: '',
  launch_page_status: '',
  launch_page_content: '',
  status_page_status: '',
  status_page_content: ''
};

const app_reducer = (state = default_state, action) => {
  switch (action.type) {
    case 'UPDATE_ACTIVE_MENU_ITEM':
      return Object.assign({}, state, { active_menu_item: action.item });
    //
    case 'RESET_SETUP_PAGE':
      return Object.assign({}, state, {
        active_menu_item: 'Setup',
        setup_page_status: 'Loading',
        setup_page_content: 'Loading'
      });
    case 'DISPLAY_SETUP_PAGE_ERROR':
      return Object.assign({}, state, {
        setup_page_status: 'error',
        setup_page_content: action.error
      });
    case 'DISPLAY_SETUP_PAGE_CONTENT':
      return Object.assign({}, state, {
        setup_page_status: 'content',
        setup_page_content: action.content
      });
    //
    case 'RESET_CONFIGURE_PAGE':
      return Object.assign({}, state, {
        active_menu_item: 'Configure',
        configure_page_status: 'Loading',
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
        launch_page_status: 'Loading',
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
        status_page_status: 'Loading',
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
