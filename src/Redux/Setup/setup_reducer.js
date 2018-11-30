//

const default_state = {
  setup_page_status: '' // loading, content, error
};

const setup_reducer = (state = default_state, action) => {
  switch (action.type) {
    case 'RESET_SETUP_PAGE':
      return Object.assign({}, state, {
        setup_page_status: 'loading'
      });
    case 'DISPLAY_SETUP_PAGE_ERROR':
      return Object.assign({}, state, {
        setup_page_status: 'error'
      });
    case 'UPDATE_AVAILABLE_CREDENTIAL_PROFILES':
      return Object.assign({}, state, {
        setup_page_status: 'content'
      });

    default:
      return state;
  }
};

export default setup_reducer;
