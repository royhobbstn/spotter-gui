//

const default_state = {
  configure_page_status: '',
  delete_profile_in_progress: false,
  show_add_profile_dialog: true
};

const configure_reducer = (state = default_state, action) => {
  switch (action.type) {
    case 'CANCEL_CONFIGURE_FORM':
      return Object.assign({}, state, {
        show_add_profile_dialog: false
      });

    case 'RESET_CONFIGURE_PAGE':
      return Object.assign({}, state, {
        active_menu_item: 'Configure',
        configure_page_status: 'loading'
      });
    case 'DISPLAY_CONFIGURE_PAGE_ERROR':
      return Object.assign({}, state, {
        configure_page_status: 'error'
      });
    case 'LOAD_PROFILE_DATA':
      return Object.assign({}, state, {
        configure_page_status: 'content',
        saved_profiles: action.saved_profiles,
        image_list: action.image_list
      });
    case 'DELETE_PROFILE_IN_PROGRESS':
      return Object.assign({}, state, {
        delete_profile_in_progress: true
      });
    case 'SHOW_ADD_PROFILE_DIALOG':
      return Object.assign({}, state, {
        show_add_profile_dialog: true
      });

    default:
      return state;
  }
};

export default configure_reducer;
